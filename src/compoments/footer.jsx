import React from 'react';
import '../styles/footer.css'
import doc1 from '../img/01_fo0ter.jpg'
import doc2 from '../img/02_footer.jpg'
import doc3 from '../img/03_footer.jpg'

const Footer = () => {
//c
    const date = new Date();
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top__left">
                    <div className="footer-top__list">
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/struct/profkom/"
                           rel="noreferrer" target="_blank">Профком работников
                            НГАСУ(Сибстрин)</a>
                        <a className="footer-top__item btn-effect"
                           href="http://www.sibstrin.ru/files/vorotnikov/%D0%90kkr_19_05_2020.pdf" rel="noreferrer" target="_blank">Приложения
                            к свидетельству о государственной аккредитации</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/sveden/document/info/"
                           rel="noreferrer" target="_blank">Сведения о
                            доходах</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/sveden/"
                           rel="noreferrer" target="_blank">Контактная информация</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/phones/"
                           rel="noreferrer" target="_blank">Телефонная книга</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/feedback"
                           rel="noreferrer" target="_blank">Обращения граждан</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/recruits/"
                           rel="noreferrer" target="_blank">Реестр студентов-призывников</a>
                        <a className="footer-top__item btn-effect" href="http://www.sibstrin.ru/structure/"
                           rel="noreferrer" target="_blank">Наглядная информация о структуре
                            официального сайта</a>
                    </div>
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
                <div className="footer-bot__list">
                    <a className="footer-bot__item btn-effect"
                       href="http://www.edu.ru/">
                        Федеральный портал "Российское образование"
                    </a>
                    <a className="footer-bot__item btn-effect"
                       href="https://www.minobrnauki.gov.ru/">
                        Министерство науки и высшего образования Российской Федерации
                    </a>
                    <a className="footer-bot__item btn-effect"
                       href="http://school-collection.edu.ru/">
                        Единая коллекция цифровых образовательных ресурсов
                    </a>
                    <a className="footer-bot__item btn-effect"
                       href="http://fcior.edu.ru/">
                        Федеральный центр информационно-образовательных ресурсов
                    </a>
                </div>
                <div className="fio">
                    <p>Стрельникова Татьяна Ивановна {date.getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;