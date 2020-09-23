import React from 'react';
import classes from './VoiceControl.module.scss';

const VoiceControl = ({ voices, handlerStop }) => {
    return (
        <div className={classes.voiceControl}>
            <label htmlFor="voice">Voice:</label>
            <select id="voice" ref={voices} onChange={handlerStop}></select>
        </div>
    );
};

export default VoiceControl;
