import React from 'react';
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
        <div className={classes.formGroup}>
            <div md={4}>
                <div className={classes.rangeInput}>
                    <label htmlFor="rate">
                        Rate: <b>{rate}</b>
                    </label>
                    <input
                        type="range"
                        id="rate"
                        min="0.1"
                        max="2"
                        value={rate}
                        step="0.1"
                        onChange={(e) => handlerRate(e)}
                    />
                </div>
            </div>
            <div md={4}>
                <div className={classes.rangeInput}>
                    <label htmlFor="pitch">
                        Pitch: <b>{pitch}</b>
                    </label>
                    <input
                        type="range"
                        id="pitch"
                        min="0.1"
                        max="2"
                        value={pitch}
                        step="0.1"
                        onChange={(e) => handlerPitch(e)}
                    />
                </div>
            </div>
            <div md={4}>
                <div className={classes.rangeInput}>
                    <label htmlFor="pitch">
                        Volume: <b>{volume}</b>
                    </label>
                    <input
                        type="range"
                        id="volume"
                        min="0.1"
                        max="2"
                        value={volume}
                        step="0.1"
                        onChange={(e) => handlerVolume(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default LevelsControl;
