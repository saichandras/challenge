import React from 'react';
import './TextInputs.css';

const TextInputs = ({name, email, onEmailChange, onNameChange}) => {
    return (
        <div>
            <div className="TextInput-container">
                <input className="TextInput-container-input" type="text" required placeholder="Name" name="name" value={name} onChange={onNameChange}/>
                <span className="bar"/>
            </div>
            <div className="TextInput-container">
                <input className="TextInput-container-input" type="email" required placeholder="Email" name="email" value={email} onChange={onEmailChange}/>
                <span className="bar"/>
            </div>
        </div>
    );
}

export default TextInputs;
