import React from 'react';
import './Information.css';
import {faAddressBook, faMap, faEnvelope, faPhone, faBirthdayCake, faKey} from '@fortawesome/free-solid-svg-icons'
import FontIcon from "../general/FontIcon";

const Information = ({userData}) => {

    const styles = {
        fontAwesomeIcon: {
            color: '#60a9ff'
        }
    }

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
                        <FontIcon icon ={faAddressBook}/>
                        <FontIcon icon ={faMap}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontIcon icon ={faEnvelope}/>
                        <FontIcon icon ={faPhone}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontIcon icon ={faBirthdayCake}/>
                        <FontIcon icon ={faKey}/>
                    </div>
                </div>
            </div>
            <div className="Information-details">
                <div className="Information-details-text-container">
                    <span className="Information-details-text">Details</span>
                </div>
                <div className="Information-details-subtext-container">
                    <span className="Information-details-subtext">
                        {`My name is ${userData.name.title} ${userData.name.first} ${userData.name.last} and I live in ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Information;
