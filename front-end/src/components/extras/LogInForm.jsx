import style from '../css/AdminLogin.module.css';

import { useState } from "react";

const LogInForm = () => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form className={style.LoginForm} onSubmit={(e) => submitHandler(e)}>
            <div className={style.InputFields}>
                <input type="text" id='userName' placeholder="Username" maxLength='15' 
                        value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <br />
                <input type="text" id='passWord' placeholder="Password" maxLength='15' 
                        value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
            </div>
            <button type='button' className={style.LogInButton}>Log In</button>
        </form>
    )

};

export default LogInForm;