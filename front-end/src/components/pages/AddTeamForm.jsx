import style from '../css/BasicForm.module.css';

import { useState } from "react";

const AddTeamForm = () => {

    const [nameInput, setNameInput] = useState('');
    const [nationInput, setNationInput] = useState('');
    const [pricipalInput, setPricipalInput] = useState('');
    const [yearFounded, setYearFounded] = useState(null);
    const [wdcs, setWdcs] = useState(null);
    const [wccs, setWccs] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={style.FormArea}>
            <form onSubmit={(event) => submitHandler(event)} className={style.StandardForm}>
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
                        <input type="text" id="pricipalInput" placeholder='E.g Toto Wolff' value={pricipalInput} onChange={(e) => setPricipalInput(e.target.value)}/>
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
                        <input type="number" id="yearFoundedInput" placeholder='~' min="1950" value={yearFounded} onChange={(e) => setYearFounded(e.target.value)}/>
                    </div>
                </div>

                    <button type='submit' className={style.FormButton} onClick={() => submitHandler()}>Add This Team!</button>
            </form>
        </div>
    )

};

export default AddTeamForm;