import React, { useState, useEffect, useRef } from 'react';
import {
    Container,
    Row,
    Jumbotron,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
} from 'reactstrap';

import PlayControl from '../PlayControl/PlayControl';
import classes from './Talker.module.scss';

const Talker = () => {
    const compatibility = useRef(true);
    const voices = useRef(null);
    const globalWords = useRef([]);
    const spokenTextArray = useRef([]);
    const textRef = useRef(null);
    const panelRef = useRef(null);
    const wordRef = useRef(null);
    const wordIndexRef = useRef(0);

    const [text, setText] = useState('');
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);
    const [volume, setVolume] = useState(1);

    const [isPaused, setIsPaused] = useState(true);
    const [isSpeak, setIsSpeak] = useState(true);

    const utterance = new SpeechSynthesisUtterance();
    const voicesAvailable = speechSynthesis.getVoices();

    if (window.SpeechSynthesisUtterance === undefined && !voicesAvailable) {
        compatibility.current = false;
    } else {
        compatibility.current = true;
    }

    useEffect(() => {
        setTimeout(() => {
            injectVoices(voices.current, speechSynthesis.getVoices());
        }, 1000);
    }, [voices]);

    const injectVoices = (voicesElement, voices) => {
        voicesElement.innerHTML = voices
            .map((voice) => {
                let option = document.createElement('option');

                option.value = voice.lang;
                option.textContent =
                    voice.name + (voice.default ? ' (default)' : '');
                option.setAttribute('data-voice-uri', voice.voiceURI);

                return option;
            })
            .map((option) => {
                return option.outerHTML;
            })
            .join('');
    };

    const handlerSpeak = () => {
        let words = text.split(' ');
        globalWords.current = words;
        spokenTextArray.current = words;
        drawTextInPanel(words);

        let selectedOption =
            voices.current.options[voices.current.selectedIndex];
        let selectedVoice = speechSynthesis
            .getVoices()
            .filter(function (voice) {
                return (
                    voice.voiceURI ===
                    selectedOption.getAttribute('data-voice-uri')
                );
            })
            .pop();

        utterance.text = text;
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;

        utterance.onboundary = function (e) {
            let word = getWordAt(text, e.charIndex);
            wordRef.current.innerHTML = word;

            try {
                let currentWord = document.getElementById(
                    'word_span_' + wordIndexRef.current,
                );
                currentWord.style.color = 'blue';
                currentWord.style.backgroundColor = '#e4e4e4';
                currentWord.style.padding = '0 3px';
                currentWord.style.display = 'inline-block';
                currentWord.style.margin = '0 -3px';
            } catch (e) {}

            wordIndexRef.current++;
        };

        utterance.onend = function () {
            handlerStop();
        };

        speechSynthesis.speak(utterance);
        setIsPaused(false);
        setIsSpeak(false);
    };

    const handlerStop = () => {
        wordRef.current.innerHTML = '';
        wordIndexRef.current = 0;
        panelRef.current.innerHTML = '';
        globalWords.current = [];
        spokenTextArray.current = [];
        panelRef.current.innerHTML = '';
        speechSynthesis.cancel();
        setIsPaused(true);
        setIsSpeak(true);
    };

    const handlerPause = () => {
        speechSynthesis.pause();
        setIsPaused(true);
    };

    const handlerContinue = () => {
        speechSynthesis.resume();
        setIsPaused(false);
    };

    const handlerRate = (e) => {
        setRate(e.target.value);
        handlerStop();
    };

    const handlerPitch = (e) => {
        setPitch(e.target.value);
        handlerStop();
    };

    const handlerVolume = (e) => {
        setVolume(e.target.value);
        handlerStop();
    };

    const handlerText = (e) => {
        setText(e.target.value);
        if (text === '') {
            setIsSpeak(true);
        }
        handlerStop();
    };

    const handlerClear = () => {
        setText('');
        handlerStop();
    };

    const getWordAt = (str, pos) => {
        str = String(str);
        pos = Number(pos) >>> 0;

        var left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);

        if (right < 0) {
            return str.slice(left);
        }

        return str.slice(left, right + pos);
    };

    const drawTextInPanel = (words_array) => {
        for (var i = 0; i < words_array.length; i++) {
            var html =
                '<span id="word_span_' +
                i +
                '">' +
                words_array[i] +
                '</span>&nbsp;';
            panelRef.current.innerHTML += html;
        }
    };

    return (
        <>
            {compatibility.current ? (
                <Container className={classes.content}>
                    <div
                        className={isSpeak ? null : classes.curtainBlocked}
                        onClick={handlerStop}
                    ></div>
                    <div className={classes.contentWrap}>
                        <Jumbotron className={classes.jumbotron}>
                            <Form action="" method="get">
                                <FormGroup className={classes.formGroup}>
                                    <div
                                        ref={panelRef}
                                        className={
                                            isSpeak ? null : classes.panelText
                                        }
                                    ></div>
                                    <div
                                        className={
                                            isSpeak
                                                ? null
                                                : classes.textareaBlocked
                                        }
                                    >
                                        <div
                                            ref={wordRef}
                                            className={
                                                isSpeak
                                                    ? null
                                                    : classes.currentWord
                                            }
                                        ></div>
                                    </div>

                                    <Input
                                        disabled={isSpeak ? false : true}
                                        type="textarea"
                                        id="text"
                                        ref={textRef}
                                        className={classes.inputText}
                                        value={text}
                                        onChange={(e) => handlerText(e)}
                                        onClick={handlerStop}
                                    ></Input>
                                </FormGroup>
                                <FormGroup className={classes.formGroup}>
                                    <Label for="voice">Voice:</Label>
                                    <select
                                        className="form-control"
                                        id="voice"
                                        ref={voices}
                                        onChange={handlerStop}
                                    ></select>
                                </FormGroup>
                                <Row form className={classes.formGroup}>
                                    <Col md={4}>
                                        <FormGroup
                                            className={classes.rangeInput}
                                        >
                                            <Label for="rate">
                                                Rate: <b>{rate}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="rate"
                                                min="0.1"
                                                max="2"
                                                value={rate}
                                                step="0.1"
                                                onChange={(e) => handlerRate(e)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup
                                            className={classes.rangeInput}
                                        >
                                            <Label for="pitch">
                                                Pitch: <b>{pitch}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="pitch"
                                                min="0.1"
                                                max="2"
                                                value={pitch}
                                                step="0.1"
                                                onChange={(e) =>
                                                    handlerPitch(e)
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup
                                            className={classes.rangeInput}
                                        >
                                            <Label for="pitch">
                                                Volume: <b>{volume}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="volume"
                                                min="0.1"
                                                max="2"
                                                value={volume}
                                                step="0.1"
                                                onChange={(e) =>
                                                    handlerVolume(e)
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <PlayControl
                                    isPaused={isPaused}
                                    isSpeak={isSpeak}
                                    text={text}
                                    handlerSpeak={handlerSpeak}
                                    handlerContinue={handlerContinue}
                                    handlerPause={handlerPause}
                                    handlerStop={handlerStop}
                                    handlerClear={handlerClear}
                                />
                            </Form>
                        </Jumbotron>
                    </div>
                </Container>
            ) : (
                <Container>
                    <Row>
                        <p className={classes.unsupported}>
                            Speech Synthesis API Not Supported!
                        </p>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Talker;
