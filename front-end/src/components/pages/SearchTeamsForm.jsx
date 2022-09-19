import style from '../css/SearchTeamsForm.module.css';

import { useState } from "react";
import axios from 'axios';

import TeamPrinter from "../extras/TeamPrinter";
import { useEffect } from "react";

const SearchTeamsForm = () => {

    const [searchInput, setSearchInput] = useState('');
    const [foundTeams, setFoundTeams] = useState([]);
    
    useEffect(() => {
        axios
            .get('http://localhost:5000/teams/getAllTeams')
            .then(res => {
                setFoundTeams(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={style.OutputContainer}>
            <form>
                <label htmlFor="teamsSearchInput">Team Name: </label>
                <input type="text" id="teamsSearchInput" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </form>
            <div className={style.OutputArea}>
                {(foundTeams) && foundTeams.map((team) => <TeamPrinter key={team._id} team={team} />)}
            </div>
        </div>
    );

};

export default SearchTeamsForm;