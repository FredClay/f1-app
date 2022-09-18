import style from '../css/Header.module.css';

import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navi = useNavigate();

    return (
        <div className={style.AppHeader}>
            <div className={style.AppLogo} onClick={() => navi('/')}>
                <p>EVERYTHING F1</p>
            </div>
            <div className={style.HeaderButtons}>
                <button type='button' onClick={() => navi('/notFound')}>Testing</button>
                <button type='button' onClick={() => navi('/driversHome')}>Drivers</button>
            </div>
        </div>
    )

};

export default Header;
