import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setAlert()
  }, 1500);
  }
  const [text, settext] = useState("Enable DarkMode")
  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      settext('Disable DarkMode')
      showAlert('Dark mode has been enabled','success')
      document.title='TextUtils - DarkMode'
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      settext('Enable DarkMode')
      showAlert('Dark mode has been disabled','success')
      document.title='TextUtils | Home'
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm Heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
