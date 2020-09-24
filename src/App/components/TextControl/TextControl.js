import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import classes from './TextControl.module.scss';

const TextControl = ({
    text,
    setText,
    textRef,
    panelRef,
    isSpeak,
    handlerStop,
    handlerText,
    wordRef,
}) => {
    return (
        <div className={classes.textControl}>
            <div className={classes.inputTextWrap}>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={(editor) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
            </div>
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
            {/* {!isSpeak ? null : (
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
            )} */}
        </div>
    );
};

export default TextControl;
