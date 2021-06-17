import React, {useState} from 'react';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import FontIcon from "../general/FontIcon";
import './Footer.css'

const Footer = ({userData}) => {
    return (
        <div className="Footer-social-icon-container">
            <div className="Footer-social-icon">
                <FontIcon
                    handleClick={() => {
                        //Can use userData link here
                        window.location.href = 'https://facebook.com'
                    }}
                    icon={faFacebook}
                    size="2x"
                />
            </div>
            <div className="Footer-social-icon">
                <FontIcon
                    handleClick={() => {
                        //Can use userData link here
                        window.location.href = 'https://twitter.com'
                    }}
                    icon={faTwitter}
                    size="2x"
                />
            </div>
            <div className="Footer-social-icon">
                <FontIcon
                    handleClick={() => {
                        //Can use userData link here
                        window.location.href = 'https://instagram.com'
                    }}
                    icon={faInstagram}
                    size="2x"
                />
            </div>
        </div>
    );
};

export default Footer;
