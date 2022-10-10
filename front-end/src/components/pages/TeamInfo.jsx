import { useEffect, useState } from "react";
import axios from 'axios';
import {useParams, Link } from "react-router-dom";

const TeamInfo = () => {

    const { name } = useParams();

    const [thisTeam, setThisTeam] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5000/teams/getSpecificTeam/` + name)
            .then((results) => {
                setThisTeam(results.data)
            })
            .catch((err) => console.log(err));
    }, [name]);

    return (
        <div>
            <div>
                <Link to={'/teamsHome'}>{'<<< Go Back'}</Link>
            </div>
            <div>
                <h1>{name}</h1>
                <p>Indfo will display here.</p>
            </div>
        </div>
    )

};

export default TeamInfo;