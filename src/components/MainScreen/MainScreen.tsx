import {FC} from "react";
import css from './MainScreen.module.css'
import powerButton from '../../assets/images/power-button.svg'
import bluePlanet from '../../assets/images/blue-planet.svg'


const MainScreen: FC = () => {
    return (
        <section className={css.main}>
            <div className={css.connection_section}>
                <div className={`${css.connection_button}`}>
                    <div className={css.loader}></div>
                    <button>
                        <img src={powerButton} alt="power button"/>
                    </button>
                </div>
                <p className={css.connection_status}>Press to connect</p>
            </div>
            <div className={'css.connection_planet'}>
                <img src={bluePlanet} alt=""/>
            </div>
        </section>

    )
}

export default MainScreen;