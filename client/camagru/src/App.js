import React from 'react';
import './app.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import SignIn from './components/Forms/SignIn';
import Register from './components/Forms/Register';
import ResetPassword from './components/Forms/ResetPassword';
import ConfirmReset from './components/Forms/ConfirmReset';
import SignIn_SignUp from './components/Forms/SignIn_SignUp';
import ConfirmEmailPage from './components/Forms/ConfirmEmailPage';
import PicturePage from './components/Pages/PicturePage';
import TakePicturePage from './components/Pages/TakePicturePage';
import MyProfile from './components/Pages/MyProfile';
import Settings from './components/Pages/Settings';


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
        <Route path="/not_auth" exact component={SignIn_SignUp}/>
        <Route path="/confirm_email" exact component={ConfirmEmailPage}/>
        <Route path="/picture_page" exact component={PicturePage}/>
        <Route path="/snap_page" exact component={TakePicturePage}/>
        <Route path="/myprofile" exact component={MyProfile}/>
        <Route path="/settings" exact component={Settings}/>
        {/* <Route exact component={ErrorPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
