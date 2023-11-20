import React from 'react';
import '../styles/footer.css'
import doc1 from '../img/01_fo0ter.jpg'
import doc2 from '../img/02_footer.jpg'
import doc3 from '../img/03_footer.jpg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top__left">
                    <ul className="footer-top__list">
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/struct/profkom/" target="_blank">Профком работников
                                НГАСУ(Сибстрин)</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/files/vorotnikov/%D0%90kkr_19_05_2020.pdf" target="_blank">Приложения
                                к свидетельству о государственной аккредитации</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/sveden/document/info/" target="_blank">Сведения о
                                доходах</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/sveden/" target="_blank">Контактная информация</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/phones/" target="_blank">Телефонная книга</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/feedback" target="_blank">Обращения граждан</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/recruits/" target="_blank">Реестр студентов-призывников</a>
                        </li>
                        <li className="footer-top__item">
                            <a href="http://www.sibstrin.ru/structure/" target="_blank">Наглядная информация о структуре
                                официального сайта</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-top__mid">
                    <a href="http://www.sibstrin.ru/files/ngasu_licens/01_big.jpg">
                        <img src={doc1} alt="doc1"/>
                    </a>
                    <a href="https://islod.obrnadzor.gov.ru/rlic/details/9e2b7f33d49f4133816d8de25fd46d5d/">
                        <img src={doc2} alt="doc2"/>
                    </a>
                    <a href="http://www.sibstrin.ru/files/_4844308.zip">
                        <img src={doc3} alt="doc3"/>
                    </a>
                </div>
                <div className="footer-top__right">
                    <h3><a href="http://www.sibstrin.ru/partners/">Наши партнеры</a></h3>
                    <div className="footer-top__partners">
                        <div className="footer-top__content"><a href="http://www.diskuss.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/diskus_logo.png" alt="partner_logo"/>
                        </a></div>
                        <div className="footer-top__content"><a href="https://koloritlkz.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/kolorit_logo.png"
                                 alt="partner_logo"/>
                        </a></div>
                        <div className="footer-top__content"><a href="http://www.ventcomplex.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/ventkomplex.png" alt="partner_logo"/>
                        </a></div>
                        <div className="footer-top__content"><a href="https://asonsk.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/asono_logo.png" alt="partner_logo"/>
                        </a></div>
                        <div className="footer-top__content"><a href="http://www.knauf.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/knauf_logo.png" alt="partner_logo"/>
                        </a></div>
                        <div className="footer-top__content"><a href="http://www.csib.ru/">
                            <img src="http://www.sibstrin.ru/images/web20/partners/sibir_logo.png" alt="partner_logo"/>
                        </a></div>
                    </div>
                </div>
            </div>
            <div className="footer-bot">
                <ul className="footer-bot__list">
                    <li className="footer-bot__item"><a href="http://www.edu.ru/">
                        Федеральный портал "Российское образование"
                    </a></li>
                    <li className="footer-bot__item"><a href="https://www.minobrnauki.gov.ru/">
                        Министерство науки и высшего образования Российской Федерации
                    </a></li>
                    <li className="footer-bot__item"><a href="http://school-collection.edu.ru/">
                        Единая коллекция цифровых образовательных ресурсов
                    </a></li>
                    <li className="footer-bot__item"><a href="http://fcior.edu.ru/">
                        Федеральный центр информационно-образовательных ресурсов
                    </a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;