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
        <div className={classes.formGroup}>
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
            <div className={classes.inputTextWrap}>
                <textarea
                    disabled={isSpeak ? false : true}
                    id="text"
                    ref={textRef}
                    className={classes.inputText}
                    value={text}
                    onChange={(e) => handlerText(e)}
                    onClick={handlerStop}
                ></textarea>
            </div>
        </div>
    );
};

export default TextControl;
