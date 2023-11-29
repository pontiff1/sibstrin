import React from 'react';
import '../styles/navbar.css'
import {Link} from 'react-router-dom';
import img1 from '../img/DSC_8895-400(4).jpg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <div className="navbar__list">
                    <Link className="navbar__item btn-effect" to="/">ИЭФ</Link>
                    <Link className="navbar__item btn-effect" to="/enrollee">Абитуриентам</Link>
                    <Link className="navbar__item btn-effect" to="/news">Новости факультета</Link>
                    <Link className="navbar__item btn-effect" to="/employees">Сотрудники</Link>
                </div>
            </div>
            <div className="navbar__news">
                <h3>Новости вуза</h3>
                <ul className="navbar__list">
                    <li className="navbar__item news-content">
                        <div className="navbar__img">
                            <img src={img1} alt="#"/>
                            <h4 className="navbar__title"><a href="http://www.sibstrin.ru/news/miscellaneous/9177/"
                                                             target="_blank">
                                Ректор НГАСУ (Сибстрин) Юрий Сколубович поздравляет с&nbsp;Днем преподавателя высшей
                                школы</a></h4>
                        </div>
                        <div className="navbar__content">
                            <p className="navbar__desc">Уважаемые преподаватели, дорогие ветераны НГАСУ (Сибстрин)!
                                От&nbsp;имени ректората университета и&nbsp;себя лично сердечно поздравляю вас
                                с&nbsp;профессиональным праздником&nbsp;&mdash; Днем преподавателя высшей школы! Этот
                                праздник, учрежденный Министерством науки и&nbsp;высшего образования&nbsp;РФ в&nbsp;знак
                                признания заслуг педагогов вузов, которые помогают студентам стать квалифицированными
                                специалистами, отмечается в&nbsp;нашей стране 19&nbsp;ноября&nbsp;&mdash; в&nbsp;день
                                рождения выдающегося ученого, основателя Московского государственного университета
                                Михаила Васильевича Ломоносова.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;