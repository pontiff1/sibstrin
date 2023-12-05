import React from 'react';
import '../styles/header.css'
import logo from '../img/logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVk, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    return (
        <header className="header container" id="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <img src={logo} alt="logo1"/>
                </div>
                <div className="header-top__info">
                    <div className="header-top__title">
                        <h1>
                            НОВОСИБИРСКИЙ ГОСУДАРСТВЕННЫЙ АРХИТЕКТУРНО-СТРОИТЕЛЬНЫЙ УНИВЕРСИТЕТ (СИБСТРИН)
                        </h1>
                    </div>
                    <div className="header-top__links">
                        <p>Мы в соцсетях:</p>
                        <a href="https://vk.com/hracy" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faVk} size="2x"/>
                        </a>
                        <a href="https://t.me/ngasusibstrin" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTelegram} size="2x"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UClGUmecsfygSQ3VD20LH6Sw/" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-bot">
                <div className="header-bot__list">
                    <a className="header-bot__item btn-effect" href="http://www.sibstrin.ru/"
                       rel="noreferrer" target="_blank">Главная</a>
                    <a className="header-bot__item btn-effect" href="http://www.sibstrin.ru/news/"
                       rel="noreferrer" target="_blank">Новости</a>
                    <a className="header-bot__item btn-effect" href="http://www.sibstrin.ru/sveden/struct/"
                       rel="noreferrer" target="_blank">Структура</a>
                    <a className="header-bot__item btn-effect" href="https://dpo.sibstrin.ru/" rel="noreferrer" target="_blank">Дополнительное
                        образование</a>
                    <a className="header-bot__item btn-effect" href="http://www.sibstrin.ru/struct/cmd/"
                       rel="noreferrer" target="_blank">Международное сотрудничество</a>
                    <a className="header-bot__item btn-effect" href="http://www.sibstrin.ru/sveden/" rel="noreferrer" target="_blank">Сведения
                        об организации</a>
                </div>
            </div>
        </header>
    );
};

export default Header;