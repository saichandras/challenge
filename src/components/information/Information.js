import React, {useReducer} from 'react';
import './Information.css';
import {faAddressBook, faMap, faEnvelope, faPhone, faBirthdayCake, faKey} from '@fortawesome/free-solid-svg-icons'
import FontIcon from "../general/FontIcon";
import {getDob} from "../../helper/HelperFunctions";

const Information = ({userData}) => {

    let text = `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and I live in ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`;

    const reducer = (state, action) => {

        switch (action.type) {
            case 1: //Address
                return (`My name is ${userData.name.title} ${userData.name.first} ${userData.name.last}`);
            case 2: //Location
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and I live in ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`;
            case 3: //Email Details
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and Email is ${userData.email}`;
            case 4: //Phone Number
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and my phone number is ${userData.phone} and my cell number is ${userData.cell}`;
            case 5: //Date of Birth
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and my date of birth is ${getDob(userData.dob.date)}`;
            case 6: //Username
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and my username is ${userData.login.username}`;
            default:
                return `My name is ${userData.name.title} ${userData.name.first} ${userData.name.last}`;
        }
    }

    const [state, dispatch] = useReducer(reducer, text);

    return (
        <div className="Information">
            <div className="Information-image-icons-container">
                <div className="Information-image-container">
                    <img className="Information-image"
                         src={userData.picture.large}
                         alt="Photo"/>
                </div>
                <div className="Information-icons-container">
                    <div className="Information-icons-container-row">
                        <FontIcon handleClick={() => dispatch({type: 1})} icon={faAddressBook}/>
                        <FontIcon handleClick={() => dispatch({type: 2})} icon={faMap}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontIcon handleClick={() => dispatch({type: 3})} icon={faEnvelope}/>
                        <FontIcon handleClick={() => dispatch({type: 4})} icon={faPhone}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontIcon handleClick={() => dispatch({type: 5})} icon={faBirthdayCake}/>
                        <FontIcon handleClick={() => dispatch({type: 6})} icon={faKey}/>
                    </div>
                </div>
            </div>
            <div className="Information-details">
                <div className="Information-details-text-container">
                    <span className="Information-details-text">Details</span>
                </div>
                <div className="Information-details-subtext-container">
                    <span className="Information-details-subtext">
                        {state}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Information;
