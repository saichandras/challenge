import React from 'react';
import './Information.css';
import {faAddressBook, faMap, faEnvelope, faPhone, faBirthdayCake, faKey} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faAddressBook}/>
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faMap}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faEnvelope}/>
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faPhone}/>
                    </div>
                    <div className="Information-icons-container-row">
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faBirthdayCake}/>
                        <FontAwesomeIcon style={styles.fontAwesomeIcon} icon={faKey}/>
                    </div>
                </div>
            </div>
            <div className="Information-details">
                <div className="Information-details-text-container">

                </div>
                <div className="Information-details-subtext-container">

                </div>
            </div>
        </div>
    );
};

export default Information;
