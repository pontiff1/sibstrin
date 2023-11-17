import React from 'react';
import '../styles/header.css'
import logo from '../img/logo1.png'

const Header = () => {
    return (
        <header className="header container" id="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <img src={logo} alt="logo1" />
                </div>
                <div className="header-top__info">
                    <div className="header-top__title">
                        <h1>
                            НОВОСИБИРСКИЙ ГОСУДАРСТВЕННЫЙ АРХИТЕКТУРНО-СТРОИТЕЛЬНЫЙ УНИВЕРСИТЕТ (СИБСТРИН)
                        </h1>
                    </div>
                    <div className="header-top__links">
                        <p>Мы в соцсетях:</p>
                        <a href="https://vk.com/hracy" target="_blank">VK</a>
                        <a href="https://t.me/ngasusibstrin" target="_blank">TG</a>
                        <a href="https://www.youtube.com/channel/UClGUmecsfygSQ3VD20LH6Sw/" target="_blank">YT</a>
                    </div>
                </div>
            </div>
            <div className="header-bot">
                <ul className="header-bot__list">
                    <li className="header-bot__item">
                        <a href="http://www.sibstrin.ru/" target="_blank">Главная</a>
                    </li>
                    <li className="header-bot__item" >
                        <a href="http://www.sibstrin.ru/news/" target="_blank">Новости</a>
                    </li>
                    <li className="header-bot__item" >
                        <a href="http://www.sibstrin.ru/sveden/struct/" target="_blank">Структура</a>
                    </li>
                    <li className="header-bot__item" >
                        <a href="https://dpo.sibstrin.ru/" target="_blank">Дополнительное образование</a>
                    </li>
                    <li className="header-bot__item" >
                        <a href="http://www.sibstrin.ru/struct/cmd/" target="_blank">Международное сотрудничество</a>
                    </li>
                    <li className="header-bot__item" >
                        <a href="http://www.sibstrin.ru/sveden/" target="_blank">Сведения об организации</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;