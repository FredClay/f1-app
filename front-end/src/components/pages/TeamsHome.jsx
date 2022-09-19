import style from '../css/TeamsHome.module.css';

import { useState } from "react";

import AddTeamForm from "./AddTeamForm";
import SearchTeamsForm from './SearchTeamsForm';

const TeamsHome = () => {

    const [displayTopic, setDisplayTopic] = useState('');

    const renderSwitch = (renderState) => {
        switch(renderState) {
            case 'teamAdd':
                return <AddTeamForm />;
            case 'teamSearch':
                return <SearchTeamsForm />;
            default:
                return <></>;
        }
    };

    return (
        <div className={style.TeamsHome}>
            <div className={style.TeamsWelcome}>
                <h1>Welcome to the Team's page!</h1>
            </div>
            <div className={style.TeamsButtons}>
                <button type="button" onClick={() => setDisplayTopic('teamAdd')}>Add a Team</button>
                <button type="button" onClick={() => setDisplayTopic('teamSearch')}>Search for a Team</button>
            </div>
            <div className={style.RenderArea}>
                {renderSwitch(displayTopic)}
            </div>
        </div>
    )

};

export default TeamsHome;