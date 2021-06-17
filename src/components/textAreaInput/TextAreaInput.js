import React from 'react';
import './TextAreaInput.css';
import Constants from "../../helper/Constants";

const TextAreaInput = ({message, onMessageChange}) => {
    return (
        <textarea
            className="TextArea"
            name="msg"
            value={message}
            onChange={onMessageChange}
            rows="5"
            cols="33"
            placeholder= {Constants.textAreaPlaceHolder}
        />
    );
}

export default TextAreaInput;
