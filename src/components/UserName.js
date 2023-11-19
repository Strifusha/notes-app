import '../styles/UserName.css';
// import { useState } from 'react';

export function UserName({ userNameInput, setUserNameInput }) {
    const hasNums = (str) => /\d/.test(str);

    return (
        <div className="nameWrapper" datatitle='numbers are required'>
            <input type='text'
                className="usernameInput"
                placeholder='username'
                // value={userNameInput}
                onChange={(e) => setUserNameInput(e.target.value)}

            />


            {!hasNums(userNameInput) && (<p className="err-helper">Invalid username</p>)}
        </div>
    )
}
