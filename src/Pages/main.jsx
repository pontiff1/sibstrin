import React from 'react';
import logoMain from '../img/герб ИЭФ_3 1.png'
import '../styles/main.css'

const Main = () => {
    return (
        <section className="section-main">
            <div className="section-main__content">
                <img className="section-main__logo" src={logoMain} alt="logo"/>
                <h2 className="section-main__title">Инженерно-экологический факультет</h2>
            </div>
            <div className="section-main__content block">
                <h3>Контактная информация</h3>
                <div className="hr"></div>
                <p>630008, Новосибирск, ул. Тургенева, 159,</p>
                <p> ком.352 (лабораторный корпус), </p>
                <p> тел./факс 8(383)266-75-20,</p>
                <p><a href="mailto:ief@sibstrin.ru">ief@sibstrin.ru</a></p>
                <p><a href="http://vk.com/public41210726" target="_blank">http://vk.com/public41210726</a></p>
            </div>
            <div className="section-main__content block">
                <h3>Деканат</h3>
                <div className="hr"></div>
                <p>Декан: канд. техн. наук, доцент: <a href="http://www.sibstrin.ru/facult/ief/lecturer/kosolapova/"
                                                       target="_blank">Косолапова
                    Ирина Анатольевна</a></p>
                <p>Зам. декана: ст.преподаватель: <a
                    href="http://www.sibstrin.ru/struct/chair/tgiv/tgiv_sotrudniki/saveliev/" target="_blank">Савельев
                    Евгений Геннадьевич</a></p>
                <p>Зам. декана:ст. преподаватель: <a
                    href="http://www.sibstrin.ru/facult/ief/lecturer/strelnikova/" target="_blank">Cтрельникова Татьяна
                    Ивановна</a></p>
                <p>Специалист по учебно-методической работе: <a
                    href="http://www.sibstrin.ru/person/212/" target="_blank">Сурначева Ольга Лирьевна</a></p>
            </div>
            <div className="section-main__content block">
                <h3>Кафедры</h3>
                <div className="hr"></div>
                <p><a href="http://www.sibstrin.ru/struct/chair/viv/" target="_blank">Водоснабжения и водоотведения
                    (ВВ)</a></p>
                <p><a href="http://www.sibstrin.ru/struct/chair/gtbe/" target="_blank">Кафедра гидротехнического
                    строительства, безопасности и экологии (ГТСБЭ)</a></p>
                <p><a href="http://www.sibstrin.ru/struct/chair/geodez/" target="_blank">Инженерной геодезии (ИГ)</a>
                </p>
                <p><a href="http://www.sibstrin.ru/struct/chair/tgiv/" target="_blank">Теплогазоснабжения и вентиляции
                    (ТГВ)</a></p>
                <p><a href="http://www.sibstrin.ru/struct/chair/fiziki_himii/" target="_blank">Физики и Химии</a></p>
            </div>
        </section>
    );
};

export default Main;