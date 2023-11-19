import React from "react";
import '../styles/SubmitBtn.css';
import { useState } from "react";

export function SubmitBtn(userPass, userNameInput) {

    return (
        <button type="button" className="submit" onClick={() => console.log(userNameInput, userPass)}>Submit</button>
    )
}

