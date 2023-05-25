// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, {useState} from 'react';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const[mode, setmode]=useState('light');

  // show alert to user when something happened
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    // settimeout use to hide alert after 2s
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  // Remove classess
  const removeclasslist=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  // toggle mode is used to change state of component i.e dark to light or light to dark
  const togglemode=(cls)=>{
    removeclasslist();
    // console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#555759';
      document.body.style.color="white";
      showAlert("dark mode has been enabled","success");
      document.title="form-drakmode";
      
      // settimeinterval is used to change page title in every 1.5s when enabled dark mode(used to blink title)
      setInterval(()=>{
        document.title="Install this browser"; 
      },1500)
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color="black";
      showAlert("light mode has been enabled","primary");
      document.title="form-Lightmode";

      // settimeinterval is used to change page title in every 1.5s when enabled light mode (used to blink title)
      setInterval(()=>{
        document.title="Amazing browser"; 
      },2000)
    }
  }
  return (
    <>
    <Router>
<Navbar title="Panwar" Abouttext="About Panwar" mode={mode} togglemode={togglemode}/>
{/* <Navbar/> */}
<Alerts alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Form heading="Try Form- Word counter, Charactor counter, Speak Text"  mode={mode} showAlert={showAlert}/>} />
        </Routes>

</div>
</Router>
    </>
  );
}

export default App;
