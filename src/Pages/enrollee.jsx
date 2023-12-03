import React from 'react';
import '../styles/enrollee.css'

const Enrollee = () => {
    return (
        <section className="section-enrollee">
            <div className="section-enrollee__content">
                <h2 className="section-enrollee__title">Информация о факультете</h2>
                <div className="hr"></div>
                <p className="section-enrollee__desc">Инженерно-экологический факультет образован в&nbsp;1934&nbsp;году.
                    Инженерно-экологический факультет
                    имеет значительный опыт
                    в&nbsp;подготовке высокопрофессиональных кадров по&nbsp;приоритетным направлениям развития, науки,
                    технологии и&nbsp;техники
                    Российской Федерации в&nbsp;области жилищно-коммунального хозяйства, инженерной экологии,
                    гидротехнического строительства.
                    Такая подготовка осуществляется на&nbsp;базе научно-образовательных школ, занимающихся актуальными
                    проблемами
                    в&nbsp;вопросах водоподготовки и&nbsp;очистки сточных вод, теплогазоснабжения и&nbsp;вентиляции,
                    эксплуатации гидротехнических
                    сооружений, вредного воздействия вод, экологического мониторинга водных объектов, известных
                    не&nbsp;только в&nbsp;рамках
                    Сибирского региона и&nbsp;России, но&nbsp;и&nbsp;за&nbsp;рубежом.</p>
                <div className="section-enrollee__info">
                    <h3>Направления подготовки</h3>
                    <div className="hr"></div>
                    <ul className="section-enrollee__list">
                        <li className="section-enrollee__item"> Бакалавриат
                            <ol className="section-enrollee__list">
                                <li className="section-enrollee__item">
                                    Направление «Строительство»:
                                    <ol type="a" className="section-enrollee__list">
                                        <li><a
                                            href="http://www.sibstrin.ru/struct/chair/viv/abinurient_viv/"> Водоснабжение
                                            и водоотведение.</a></li>
                                        <li><a href="http://www.sibstrin.ru/struct/chair/gtbe/abitur/"> Гидротехническое
                                            строительство.</a></li>
                                        <li><a href="#"> Теплогазоснабжение и вентиляция.</a></li>
                                    </ol>
                                </li>
                                <li className="section-enrollee__item">
                                    Направление «Природообустройство и водопользование»:
                                    <ol type="a" className="section-enrollee__list">
                                        <li><a href="http://www.sibstrin.ru/struct/chair/gtbe/abitur/"> Комплексное
                                            использование и охрана водных ресурсов.</a></li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ul>

                    <ul className="section-enrollee__list">
                        <li className="section-enrollee__item"> Специалитет
                            <ol className="section-enrollee__list">
                                <li className="section-enrollee__item">
                                    <a href="http://www.sibstrin.ru/struct/chair/geodez/abitur/"> Специальность
                                        «Прикладная геодезия».</a>
                                </li>
                                <li className="section-enrollee__item">
                                    <a href="http://www.sibstrin.ru/struct/chair/geodez/abitur/"> Специализация
                                        «Геодезическое обеспечение строительного надзора и экспертиз».</a>
                                </li>
                            </ol>
                        </li>
                    </ul>

                    <ul className="section-enrollee__list">
                        <li className="section-enrollee__item"> МАГИСТРАТУРА
                            <ol className="section-enrollee__list">
                                <li className="section-enrollee__item">
                                    Направление «Строительство»:
                                    <ol type="a" className="section-enrollee__list">
                                        <li>Водоснабжение и водоотведение</li>
                                        <li> Гидротехническое строительство.</li>
                                        <li> Теплогазоснабжение и вентиляция.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="section-enrollee__info">
                    <h3>Научная деятельность</h3>
                    <div className="hr"></div>
                    <div className="section-enrollee__science">
                        <div className="section-enrollee__img-science">
                            <img className="photo1" src="http://www.sibstrin.ru/files/Kosolapova/13(9)(1).jpg" alt="photo"/>
                            <img className="photo2" src="http://www.sibstrin.ru/files/Kosolapova/20211111_133121.jpg" alt="photo"/>
                        </div>
                        <div className="section-enrollee__desc-science">
                            <p>Студенты инженерно-экологического факультета параллельно с&nbsp;учебным
                                процессом активно участвуют в&nbsp;различных научных мероприятиях,
                                в&nbsp;том числе мероприятиях экологической направленности городского,
                                всероссийского и&nbsp;международного уровня, достойно представляют
                                наш университет, регулярно занимают призовые места. Это
                                конференции, кейс-турниры, олимпиады, форумы, круглые столы,
                                и&nbsp;т.д.</p>
                            <div className="section-enrollee__links">
                                <a href="http://www.sibstrin.ru/facult/ief/news/ochranatruda/ ">http://www.sibstrin.ru/facult/ief/news/ochranatruda/; </a>
                                <a href="http://www.sibstrin.ru/facult/ief/news/kubok2021/;">http://www.sibstrin.ru/facult/ief/news/kubok2021/; </a>
                                <a href="http://www.sibstrin.ru/facult/ief/news/osolimpiada21/">http://www.sibstrin.ru/facult/ief/news/osolimpiada21/; </a>
                                <a href="http://www.sibstrin.ru/news/miscellaneous/7983/;">http://www.sibstrin.ru/news/miscellaneous/7983/; </a>
                                <a href="http://www.sibstrin.ru/facult/ief/news/rnsk2022/">http://www.sibstrin.ru/facult/ief/news/rnsk2022/; </a>
                                <a href="http://www.sibstrin.ru/facult/ief/news/studentgoda21/">http://www.sibstrin.ru/facult/ief/news/studentgoda21/;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enrollee;