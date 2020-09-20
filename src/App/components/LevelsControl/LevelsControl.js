import React from 'react';
import { FormGroup, Row, Col, Label, Input } from 'reactstrap';
import classes from './LevelsControl.module.scss';

const LevelsControl = ({
    rate,
    handlerRate,
    pitch,
    handlerPitch,
    volume,
    handlerVolume,
}) => {
    return (
        <Row form className={classes.formGroup}>
            <Col md={4}>
                <FormGroup className={classes.rangeInput}>
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
                <FormGroup className={classes.rangeInput}>
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
                        onChange={(e) => handlerPitch(e)}
                    />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup className={classes.rangeInput}>
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
                        onChange={(e) => handlerVolume(e)}
                    />
                </FormGroup>
            </Col>
        </Row>
    );
};

export default LevelsControl;
