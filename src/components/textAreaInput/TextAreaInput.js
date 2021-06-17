import React from 'react';
import './TextAreaInput.css';

const TextAreaInput = ({message, onMessageChange}) => {
    return (
        <textarea
            className="TextArea"
            name="msg"
            value={message}
            onChange={onMessageChange}
            rows="5"
            cols="33"
            placeholder="How can I help?"
        />
    );
}

export default TextAreaInput;
