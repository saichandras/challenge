import React from 'react';
import './TextInputs.css';
import Constants from "../../helper/Constants";

const TextInputs = ({name, email, onEmailChange, onNameChange}) => {
    return (
        <div>
            <div className="TextInput-container">
                <input
                    className="TextInput-container-input" type="text"
                    required
                    placeholder={Constants.textInputNamePlaceHolder}
                    name="name" value={name}
                    onChange={onNameChange}
                />
                <span className="bar"/>
            </div>
            <div className="TextInput-container">
                <input
                    className="TextInput-container-input"
                    type="email"
                    required
                    placeholder={Constants.textInputEmailPlaceHolder}
                    name="email"
                    value={email}
                    onChange={onEmailChange}
                />
                <span className="bar"/>
            </div>
        </div>
    );
}

export default TextInputs;
