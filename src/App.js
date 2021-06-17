import React, {useState} from 'react'
import './App.css';
import Information from "./components/information/Information";
import ContactMe from "./components/contactMe/ContactMe";

const App = () => {
    return(
        <div className="App">
          <div className="App-container">
            <Information/>
            <ContactMe/>
          </div>
        </div>
    );
};

export default App;
