import style from '../css/TeamPrinter.module.css';
import { useNavigate } from 'react-router-dom';

const TeamPrinter = ({ team }) => {

    const navigator = useNavigate();

    const {name, nation, teamPrincipal, wdcs, wccs, yearFounded} = team;

    return (
        <div className={style.TeamCard} onClick={() => navigator(`/teamInfo/${name}`)}>
            <h2>{name}</h2>
            <p>{"Pricipal: " + teamPrincipal}</p>
            <p>{"Founded in " + yearFounded}</p>
            <p>{"WDCs: " + wdcs}</p>
            <p>{"WCCs: " + wccs}</p>
        </div>
    )

};

export default TeamPrinter;