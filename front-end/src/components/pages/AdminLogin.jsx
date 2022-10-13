import style from '../css/AdminLogin.module.css';

import LogInForm from "../extras/LogInForm";

import { useState } from "react";

const AdminLogin = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState('');
    
    return (
        <div className={style.AdminMain}>
            {loggedIn ? <h2>Hello, {user.name}</h2> : <LogInForm />}
        </div>
    )

};

export default AdminLogin;