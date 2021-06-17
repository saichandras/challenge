import React, {useState} from 'react';
import './ContactMe.css';
import TextInputs from "../textInputs/TextInputs";
import TextAreaInput from "../textAreaInput/TextAreaInput";
import ContactSubmitButton from "../contactSubmitButton/ContactSubmitButton";

const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="ContactMe-container">
            <span className="ContactMe-heading">Contact Me</span>
            <form>
                <TextInputs
                    name={name}
                    email={email}
                    onNameChange={(name) => {
                        setName(name.target.value);
                    }}
                    onEmailChange={(email) => {
                        setEmail(email.target.value);
                    }}
                />
                <TextAreaInput
                    message={message}
                    onMessageChange={(msg) => setMessage(msg.target.value)}
                />
                <ContactSubmitButton />
            </form>
        </div>
    );
};

export default ContactMe;
