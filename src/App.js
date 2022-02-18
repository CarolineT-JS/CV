import './App.css';
import './style/Video.css';

import React from 'react';
import Contact from './components/Contact.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
   

  return (


      <Router>
    <NavBar/>

          <div className="App">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
