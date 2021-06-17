import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const FontIcon = (props) => {
    const styles = {
        fontAwesomeIcon: {
            color: '#60a9ff'
        }
    }

    return (
        <>
            <a href="#"><FontAwesomeIcon style={styles.fontAwesomeIcon} onClick={props.handleClick} icon={props.icon}/></a>
        </>
    );
};

export default FontIcon;
