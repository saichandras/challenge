import React, {useState} from 'react';
import './ContactMe.css';
import TextInputs from "../textInputs/TextInputs";
import TextAreaInput from "../textAreaInput/TextAreaInput";
import ContactSubmitButton from "../contactSubmitButton/ContactSubmitButton";
import { toast } from "react-toast";
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (event) => {
        event.preventDefault();

        //Can use emailJS or any other email service
        /*
        emailjs.sendForm('gmail', 'templateId', event.target, 'userId')
            .then((result) => {
                console.log(result.text);
                toast.success("Email sent successfully!", {
                    backgroundColor: "green"
                });
                setEmail("");
                setName("");
                setMessage("");
            }, (error) => {
                return toast.error("Email not sent, please try again!", {
                    backgroundColor: "#F54748"
                });
            });
        }
        */

        try{
            //Email Logic Here


            toast.success("Email sent successfully!", {
                backgroundColor: "green"
            });
            setEmail("");
            setName("");
            setMessage("");
        }catch{
            return toast.error("Email not sent, please try again!", {
                backgroundColor: "#F54748"
            });
        }

    };

    return (
        <div className="ContactMe-container">
            <span className="ContactMe-heading">Contact Me</span>
            <form onSubmit={sendEmail}>
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
