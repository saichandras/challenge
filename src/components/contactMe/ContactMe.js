import React, {useState} from 'react';
import './ContactMe.css';
import TextInputs from "../textInputs/TextInputs";

const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

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
                {/*Text Area Input*/}
                {/*Button*/}
            </form>
        </div>
    );
};

export default ContactMe;
