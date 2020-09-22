import React, { useState } from 'react';
import classes from './PlayControl.module.scss';

const PlayControl = ({
    isPaused,
    isSpeak,
    text,
    handlerSpeak,
    handlerContinue,
    handlerPause,
    handlerStop,
    handlerClear,
}) => {
    const [name, setName] = useState('Control buttons');

    const handlerNameButton = (name) => {
        setTimeout(() => {
            setName(name === '' ? 'Control buttons' : name);
        }, 300);
    };
    return (
        <div className={classes.buttonGroup}>
            {isSpeak ? (
                <button
                    disabled={!text ? true : false}
                    className={[classes.button, classes.buttonSpeak].join(' ')}
                    onClick={handlerSpeak}
                    onMouseOver={() => handlerNameButton('Speak')}
                    onMouseOut={() => handlerNameButton('')}
                >
                    <i className="fas fa-play"></i>
                </button>
            ) : (
                <button
                    className={[classes.button, classes.buttonContinue].join(
                        ' ',
                    )}
                    onClick={handlerContinue}
                    onMouseOver={() => handlerNameButton('Continue')}
                    onMouseOut={() => handlerNameButton('')}
                >
                    <i className="fas fa-play"></i>
                </button>
            )}
            <button
                disabled={!isPaused ? false : true}
                id="button-pause"
                className={[classes.button, classes.buttonPause].join(' ')}
                onClick={handlerPause}
                onMouseOver={() => handlerNameButton('Pause')}
                onMouseOut={() => handlerNameButton('')}
            >
                <i className="fas fa-pause"></i>
            </button>

            <button
                disabled={!text ? true : false}
                className={[classes.button, classes.buttonStop].join(' ')}
                onClick={handlerStop}
                onMouseOver={() => handlerNameButton('Stop')}
                onMouseOut={() => handlerNameButton('')}
            >
                <i className="fas fa-stop"></i>
            </button>

            <button
                disabled={!text ? true : false}
                className={[classes.button, classes.buttonClear].join(' ')}
                onClick={handlerClear}
                onMouseOver={() => handlerNameButton('Clear')}
                onMouseOut={() => handlerNameButton('')}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
            <div className={classes.nameButton}>{name}</div>
        </div>
    );
};

export default PlayControl;
