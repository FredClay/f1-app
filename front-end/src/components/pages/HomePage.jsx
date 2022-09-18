import style from '../css/HomePage.module.css';

const HomePage = () => {

    return (
        <div className={style.HomePage}>
            <div className={style.greeting}>
                <h1>Greetings, Traveller!</h1>
                <p>This is a MERN stack app that allows you to learn more about the history of Formula 1.</p>
            </div>
        </div>
    )

};

export default HomePage;