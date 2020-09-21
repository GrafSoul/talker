import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import classes from './VoiceControl.module.scss';

const VoiceControl = ({ voices, handlerStop }) => {
    return (
        <FormGroup className={classes.formGroup}>
            <Label for="voice">Voice:</Label>
            <select
                className="form-control"
                id="voice"
                ref={voices}
                onChange={handlerStop}
            ></select>
        </FormGroup>
    );
};

export default VoiceControl;
