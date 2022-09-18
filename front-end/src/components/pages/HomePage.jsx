import style from '../css/HomePage.module.css';

const HomePage = () => {

    return (
        <div>
            <div className={style.greeting}>
                <h1>Grettings, Traveller!</h1>
                <p>This is a MERN stack app that allows you to learn more about the history of Formula 1.</p>
            </div>
        </div>
    )

};

export default HomePage;