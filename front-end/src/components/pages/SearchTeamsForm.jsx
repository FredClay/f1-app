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
                let quickArray = res.data;
                quickArray.sort((a, b) => {
                    if (a.name < b.name)
                      return -1;
                    if (a.name > b.name)
                      return 1;
                    return 0;
                  });
                setFoundTeams(quickArray);
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
                <input className={style.SearchField} type="text" id="teamsSearchInput" placeholder='Search Teams...' maxLength='16'
                    value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </form>
            <div className={style.OutputArea}>
                {(tempTeams) && tempTeams.map((team) => <TeamPrinter key={team._id} team={team} />)}
            </div>
        </div>
    );

};

export default SearchTeamsForm;