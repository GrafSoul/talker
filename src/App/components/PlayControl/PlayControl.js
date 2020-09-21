import React from 'react';
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
    return (
        <div className={classes.buttonGroup}>
            {isSpeak ? (
                <button
                    disabled={!text ? true : false}
                    id="button-speak"
                    className={classes.button}
                    onClick={handlerSpeak}
                >
                    <i className="fas fa-play"></i> Speak
                </button>
            ) : (
                <button
                    id="button-continue"
                    className={classes.button}
                    onClick={handlerContinue}
                >
                    <i className="fas fa-play"></i> Speak
                </button>
            )}
            <button
                disabled={!isPaused ? false : true}
                id="button-pause"
                className={classes.button}
                onClick={handlerPause}
            >
                <i className="fas fa-pause"></i> Pause
            </button>

            <button
                disabled={!text ? true : false}
                id="button-stop"
                className={classes.button}
                onClick={handlerStop}
            >
                <i className="fas fa-stop"></i> Stop
            </button>

            <button
                disabled={!text ? true : false}
                id="button-clear"
                className={classes.button}
                onClick={handlerClear}
            >
                <i className="fas fa-trash-alt"></i> Clear
            </button>
        </div>
    );
};

export default PlayControl;
