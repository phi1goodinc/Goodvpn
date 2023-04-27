import {FC} from "react";
import css from './Footer.module.css'
import telegramLogo from "../../assets/images/telegram-logo.svg";
import upChevron from "../../assets/images/up-chevron.svg"


const Footer: FC = () => {
    return (
        <footer className={css.footer}>
            <div className={css.main_section}>
                <div className={css.tittle_block}>
                    <h3 className={css.title}>Buy Premium</h3>
                    <div className={css.bubble}>Sale</div>
                </div>
                <p className={css.subtitle}>Fast & encrypted</p>
                <div className={css.circle_empty}>
                    <a href={"https://t.me/phginc"} target="_blank" rel="noreferrer" className={css.tg_circle}>
                        <img src={telegramLogo} alt="telegram logo"/>
                    </a>
                </div>
            </div>
            <a className={css.up_chevron} href="#">
                <img src={upChevron} alt="up chevron"/>
            </a>
        </footer>
    )
}

export default Footer;