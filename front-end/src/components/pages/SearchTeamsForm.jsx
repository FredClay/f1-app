import style from '../css/SearchTeamsForm.module.css';

import { useState } from "react";
import axios from 'axios';

import TeamPrinter from "../extras/TeamPrinter";
import { useEffect } from "react";

const SearchTeamsForm = () => {

    const [searchInput, setSearchInput] = useState('');
    const [foundTeams, setFoundTeams] = useState([]);
    const [tempTeams, setTempTeams] = useState([]);
    
    const submitHandler = (event) => {
        event.preventDefault();
    }
    
    useEffect(() => {
        axios
            .get('http://localhost:5000/teams/getAllTeams')
            .then(res => {
                setFoundTeams(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(()=> {
        let matchArray = [];
        const formattedSearch = searchInput.toLowerCase();
        
        for (const team of foundTeams) {
            if (team.name.toLowerCase().includes(formattedSearch)) {
                matchArray.push(team);
            };
        };
        setTempTeams(matchArray);
    }, [searchInput, foundTeams]);

    return (
        <div className={style.OutputContainer}>
            <form onSubmit={(e) => submitHandler(e)}>
                <label htmlFor="teamsSearchInput">Team Name: </label>
                <input type="text" id="teamsSearchInput" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </form>
            <div className={style.OutputArea}>
                {(tempTeams) && tempTeams.map((team) => <TeamPrinter key={team._id} team={team} />)}
            </div>
        </div>
    );

};

export default SearchTeamsForm;