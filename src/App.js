import React, {useState, useEffect} from 'react'
import './App.css';
import Information from "./components/information/Information";
import ContactMe from "./components/contactMe/ContactMe";
import axios from "axios";
import {ToastContainer} from "react-toast";
import Footer from "./components/footer/Footer";

const App = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = async () => {
        try {
            let response = await axios.get("https://randomuser.me/api");
            setUserData(response.data.results[0]);
            console.log(response.data.results[0]);
        } catch (err) {
            console.log(err);
        }
    };

    if (userData.length === 0) {
        return (
            <div className="App">
                <div className="App-loader-container">
                    <div className="App-loader"/>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="App-container">
                <div className="App-container-info-contact">
                    <Information userData={userData}/>
                    <ContactMe/>
                </div>
                <div className="App-container-footer">
                    <Footer userData={userData}/>
                </div>
            </div>
            <ToastContainer position="top-center" delay={3000}/>
        </div>
    );
};

export default App;
