import style from '../css/AdminLogin.module.css';

import { useState } from "react";
import axios from 'axios';

const LogInForm = (props) => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const { updater } = props;

    const submitHandler = (event) => {
        event.preventDefault();
        
        console.log("sending!");

        axios
            .get(`http://localhost:5000/users/checkCredentials/${userName}/${passWord}`)
            .then(res => {
                console.log(res.data);
                (res.data!= []) ? updater(res.data) : updater([]);
            })
            .catch(err => console.log(err));
    };

    return (
        <form className={style.LoginForm} onSubmit={(e) => submitHandler(e)}>
            <div className={style.InputFields}>
                <input type="text" id='userName' placeholder="Username" maxLength='15' 
                        value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <br />
                <input type="text" id='passWord' placeholder="Password" maxLength='15' 
                        value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
            </div>
            <button type='submit' className={style.LogInButton}>Log In</button>
        </form>
    )

};

export default LogInForm;