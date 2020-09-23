import React from 'react';
import classes from './TextControl.module.scss';

const TextControl = ({
    text,
    textRef,
    panelRef,
    isSpeak,
    handlerStop,
    handlerText,
    wordRef,
}) => {
    return (
        <div className={classes.textControl}>
            <div
                ref={panelRef}
                className={isSpeak ? null : classes.panelText}
            ></div>
            <div className={isSpeak ? null : classes.textareaBlocked}>
                <div
                    ref={wordRef}
                    className={isSpeak ? null : classes.currentWord}
                ></div>
            </div>
            {!isSpeak ? null : (
                <div className={classes.inputTextWrap}>
                    <textarea
                        autoFocus
                        disabled={isSpeak ? false : true}
                        id="text"
                        ref={textRef}
                        className={classes.inputText}
                        value={text}
                        onChange={(e) => handlerText(e)}
                        onClick={handlerStop}
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default TextControl;
