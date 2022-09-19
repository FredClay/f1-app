import style from '../css/BasicForm.module.css';

import { useState } from "react";
import axios from 'axios';

const AddTeamForm = () => {

    const [teamCreated, setTeamCreated] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [nationInput, setNationInput] = useState('');
    const [principalInput, setPrincipalInput] = useState('');
    const [yearFounded, setYearFounded] = useState(1900);
    const [wdcs, setWdcs] = useState(0);
    const [wccs, setWccs] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        
        const bodyToPost = {
            name: nameInput,
            nation: nationInput,
            teamPrincipal: principalInput,
            yearFounded: yearFounded,
            wdcs: wdcs,
            wccs: wccs
        }
        
        axios
            .post('http://localhost:5000/teams/addNewTeam', bodyToPost)
            .then(res => {
                console.log(res);
                setTeamCreated(true);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className={style.FormArea}>
            {(!teamCreated) ? 
            <form className={style.StandardForm}>
                <div className={style.LargeFields}>
                    <div className={style.StandardField}>
                        <label htmlFor="nameInput">Team Name</label>
                        <input type="text" id="nameInput" placeholder="E.g McLaren" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
                    </div>
                    <div className={style.StandardField}>
                        <label htmlFor="nationInput">Team Nation</label>
                        <input type="text" id="nationInput" placeholder="E.g UK" value={nationInput} onChange={(e) => setNationInput(e.target.value)}/>
                    </div>
                </div>
                <p>Optional Info:</p>
                <div className={style.MiniFields}>
                    <div className={style.MiniField}>
                        <label htmlFor='pricipalInput'>Team Pricipal</label>
                        <input type="text" id="pricipalInput" placeholder='E.g Toto Wolff' value={principalInput} onChange={(e) => setPrincipalInput(e.target.value)}/>
                    </div>
                    <div className={style.MiniField}>
                        <label htmlFor='wdcInput'>WDC Total</label>
                        <input type="number" id="wdcInput" placeholder='0' min="0" value={wdcs} onChange={(e) => setWdcs(e.target.value)}/>
                    </div>
                    <div className={style.MiniField}>
                        <label htmlFor='wccInput'>WCC Total</label>
                        <input type="number" id="wccInput" placeholder='0' min="0" value={wccs} onChange={(e) => setWccs(e.target.value)}/>
                    </div>
                    <div className={style.MiniField}>
                        <label htmlFor='yearFoundedInput'>Year Founded</label>
                        <input type="number" id="yearFoundedInput" placeholder='~' min="1900" value={yearFounded} onChange={(e) => setYearFounded(e.target.value)}/>
                    </div>
                </div>

                    <button type='button' className={style.FormButton} onClick={(event) => submitHandler(event)}>Add This Team!</button>
            </form> : <p>{nameInput} has been added to the database.</p>}
        </div>
    )

};

export default AddTeamForm;