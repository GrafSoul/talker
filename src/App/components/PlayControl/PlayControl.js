import React from 'react';
import { FormGroup, Button } from 'reactstrap';
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
        <FormGroup className={classes.buttonGroup}>
            {isSpeak ? (
                <Button
                    disabled={!text ? true : false}
                    type="button"
                    id="button-speak"
                    color="success"
                    className={classes.button}
                    onClick={handlerSpeak}
                >
                    <i className="fas fa-play"></i> Speak
                </Button>
            ) : (
                <Button
                    type="button"
                    id="button-continue"
                    color="info"
                    className={classes.button}
                    onClick={handlerContinue}
                >
                    <i className="fas fa-play"></i> Speak
                </Button>
            )}
            <Button
                disabled={!isPaused ? false : true}
                type="button"
                id="button-pause"
                color="info"
                className={classes.button}
                onClick={handlerPause}
            >
                <i className="fas fa-pause"></i> Pause
            </Button>

            <Button
                disabled={!text ? true : false}
                type="button"
                id="button-stop"
                color="danger"
                className={classes.button}
                onClick={handlerStop}
            >
                <i className="fas fa-stop"></i> Stop
            </Button>

            <Button
                disabled={!text ? true : false}
                type="button"
                id="button-clear"
                color="danger"
                className={classes.button}
                onClick={handlerClear}
            >
                <i className="fas fa-trash-alt"></i> Clear
            </Button>
        </FormGroup>
    );
};

export default PlayControl;
