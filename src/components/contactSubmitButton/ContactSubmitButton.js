import React from 'react';
import './ContactSubmitButton.css';

const ContactSubmitButton = () => {
    return (
        <div className="button-container">
            <button className="pushable">
            <span className="front">
                Submit
            </span>
            </button>
        </div>
    );
}

export default ContactSubmitButton;
