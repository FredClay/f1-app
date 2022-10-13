import style from '../css/AdminLogin.module.css';

import LogInForm from "../extras/LogInForm";

import { useState } from "react";

const AdminLogin = () => {
    const [user, setUser] = useState('');
    const [failedLogin, setFailedLogin] = useState(false);
    
    const userUpdater = (username) => {
        (username) ? setUser(username.username) : setFailedLogin(true);
    }

    return (
        <div className={style.AdminMain}>
            {user ? <h2>Hello, {user}</h2> : <LogInForm updater={userUpdater}/>}
            {(!user && failedLogin) && <h2>We didn't recognise your credentials.<br />Please try again.</h2>}
        </div>
    )

};

export default AdminLogin;