import React from 'react';
import './app.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import SignIn from './components/Forms/SignIn';
import Register from './components/Forms/Register';
import ResetPassword from './components/Forms/ResetPassword';
import ConfirmReset from './components/Forms/ConfirmReset';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/reset_password" exact component={ResetPassword}/>
        <Route path="/new_password" exact component={ConfirmReset}/>
      </Switch>
    </div>
  );
}

export default App;
