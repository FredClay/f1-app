import style from '../css/TeamPrinter.module.css';

const TeamPrinter = ({ team }) => {

    const {name, nation, teamPrincipal, wdcs, wccs, yearFounded} = team;

    return (
        <div className={style.TeamCard}>
            <h2>{name}</h2>
            <p>{"Team Pricipal: " + teamPrincipal}</p>
            <p>{"Founded in " + yearFounded}</p>
            <p>{"WDCs: " + wdcs}</p>
            <p>{"WCCs: " + wccs}</p>
        </div>
    )

};

export default TeamPrinter;