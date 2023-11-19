import React from "react";
import { useState } from 'react';
import { SubmitBtn } from "./SubmitBtn";
import { UserName } from './UserName';
import { Password } from './Password';

import '../styles/LoginScreen.css'

function LoginScreen() {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <div id='welcome-screen'>

      <div id='main-pic'>
      </div>

      <div id='login-screen'>
        <h1 className="appName">Your notes app</h1>
        <UserName userNameInput={userNameInput} setUserNameInput={setUserNameInput} />
        <Password userPass={userPass} setUserPass={setUserPass} />
        <SubmitBtn userPass={userPass} userNameInput={userNameInput} />
      </div>
    </div>
  )
}

export default LoginScreen;