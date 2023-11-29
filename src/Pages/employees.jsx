import React, {useState} from 'react';
import '../styles/Employees.css';

const Employees = () => {

    const [check, setCheck] = useState(null)

    const handleCheck = (index) => {
        setCheck(index === check ? null : index)
    }

    return (
        <section className="section-employees">
            <div className="section-employees__content">
                <h2 className="section-employees__title">Сотрудники
                </h2>
                <div className="hr"></div>
                <div className="employees">
                    <p onClick={() => handleCheck(0)}> Косолапова Ирина Анатольевна</p>
                    {check === 0 && (<div className="employees__profile">
                            <img src="http://www.sibstrin.ru/files/vorotnikov/kosolapova_351x400(1).jpg" alt="photo"/>
                            <div className="employees__desc">
                                <p>Кандидат технических наук, доцент</p>
                                <p>Декан факультета</p>
                                <p>Родилась 11&nbsp;августа 1962&nbsp;года. После окончания Новосибирского
                                    инженерно-строительного института&nbsp;им. В.&nbsp;В.&nbsp;Куйбышева в&nbsp;1985
                                    году была оставлена на&nbsp;кафедре Водоснабжения и&nbsp;канализации. В&nbsp;1987
                                    году поступила в&nbsp;целевую аспирантуру лаборатории электрохимии &laquo;Института
                                    химии твёрдого тела и&nbsp;переработки минерального
                                    сырья&raquo; СО&nbsp;АН&nbsp;СССР, которую успешно окончила в&nbsp;1994 году
                                    и&nbsp;защитила кандидатскую диссертацию по&nbsp;теме &laquo;Рекуперация цинка
                                    из&nbsp;промывных растворов гальванических производств&raquo;.</p>
                                <p>С&nbsp;1994 года работала на&nbsp;кафедре Водоснабжения и&nbsp;водоотведения
                                    в&nbsp;должности ассистента, старшего преподавателя, в&nbsp;1997 году утверждена
                                    в&nbsp;ученом звании доцента. С&nbsp;апреля 2011 года&nbsp;&mdash; заведующая
                                    кафедрой водоснабжения и&nbsp;водоотведения.</p>
                                <p>Прошла несколько курсов по&nbsp;повышению квалификации:
                                    с&nbsp;3&nbsp;&mdash; 14&nbsp;октября 2011 года прошла курсы
                                    по&nbsp;программе &laquo;Проведение энергетических обследований с&nbsp;целью
                                    повышения энергетической эффективности
                                    и&nbsp;энергосбережения&raquo; в&nbsp;Новосибирском филиале ФГАОУ
                                    ДПО &laquo;ПЭИПК&raquo;, с&nbsp;17&nbsp;&mdash; 29&nbsp;октября 2011 года
                                    в&nbsp;НГТУ прошла обучение по&nbsp;программе &laquo;Технологии электронного
                                    обучения в&nbsp;деятельности преподавателя&raquo; и&nbsp;с&nbsp;6&nbsp;мая
                                    по&nbsp;14&nbsp;октября 2013 года в&nbsp;НГАСУ (Сибстрин)
                                    по&nbsp;программе &laquo;Основы работы преподавателя в&nbsp;системе дистанционного
                                    обучения Moodle&raquo;.</p>
                                <p>На&nbsp;кафедре Водоснабжения и&nbsp;водоотведения ведет курсы &laquo;Введение
                                    в&nbsp;специальность&raquo;, &laquo;Водопроводные сети&raquo;, &laquo;Водозаборные
                                    сооружения&raquo;, &laquo;Очистка природных вод&raquo;, &laquo;Специальные методы
                                    водоподготовки&raquo;, &laquo;Водоснабжение
                                    и&nbsp;водоотведение&raquo;, &laquo;Микробиология&raquo;, &laquo;Научные
                                    исследования в&nbsp;строительстве&raquo;, &laquo;Современные материалы, оборудование
                                    и&nbsp;технологии&raquo;, &laquo;Подготовка воды микро-
                                    и&nbsp;ультрафильтрацией&raquo;.</p>
                            </div>
                        </div>

                    )}
                </div>

                <div className="employees">
                    <p onClick={() => handleCheck(1)}> Савельев Евгений Геннадьевич</p>
                    {check === 1 && (<div className="employees__profile">
                            <img
                                src="http://www.sibstrin.ru/files/vorotnikov/%D0%A1%D0%B0%D0%B2%D0%B5%D0%BB%D1%8C%D0%B5%D0%B2%20%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.JPG"
                                alt="photo"/>
                            <div className="employees__desc">
                                <p>Занимаемая должность (должности)&nbsp;&mdash; Старший преподаватель кафедры ТГВ НГАСУ
                                    (Сибстрин)</p>
                                <p>Преподаваемые дисциплины -
                                    Технология и&nbsp;организация строительных и&nbsp;монтажно-заготовительных работ,
                                    Охрана воздушного бассейна, Вентиляция, Кондиционирование воздуха, Современные
                                    материалы и&nbsp;оборудование для систем ТГВ</p>
                                <p>Наименование направления подготовки&nbsp;и (или)
                                    специальности&nbsp;&mdash; Инженер-строитель
                                    по&nbsp;специальности &laquo;Теплогазоснабжение, вентиляция и&nbsp;охрана воздушного
                                    бассейна&raquo;, НИСИ им.Куйбышева, 1992г.Экономист
                                    по&nbsp;специальности &laquo;Математические методы и&nbsp;исследование операций
                                    в&nbsp;экономике&raquo;, НГУ, 1998г.</p>
                                <p>Данные о&nbsp;повышении квалификации&nbsp;и (или) профессиональной переподготовке
                                    (при наличии)&nbsp;&mdash; 2012г. &mdash;&nbsp;Федеральное государственное бюджетное
                                    учреждение &laquo;Институт профессионального администрирования и&nbsp;комплексной
                                    энергоэффективности&raquo; Министерства образования и&nbsp;науки
                                    РФ&nbsp;&mdash; &laquo;Энергосбережение и&nbsp;энергоэффективность. Энергосбережение
                                    и&nbsp;повышение эффективности в&nbsp;учреждениях профессионального
                                    образования&raquo;</p>
                                <p>Общий стаж работы&nbsp;&mdash; 29&nbsp;года</p>
                                <p>Стаж работы по&nbsp;специальности&nbsp;&mdash; 29&nbsp;года</p>
                                <p>Стаж работы в&nbsp;университете&nbsp;&mdash; 23&nbsp;года</p>
                            </div>
                        </div>

                    )}
                </div>

                <div className="employees">
                    <p onClick={() => handleCheck(2)}> Стрельникова Татьяна Ивановна</p>
                    {check === 2 && (<div className="employees__profile">
                            <img
                                src="http://www.sibstrin.ru/files/vorotnikov/45645.jpg"
                                alt="photo"/>
                            <div className="employees__desc">
                                <p>Занимаемая должность: старший преподаватель кафедры ГТСБЭ</p>
                                <p>Преподаваемые дисциплины: экология, инженерная экология, безопасность
                                    жизнедеятельности</p>
                                <p>Наименование направления: Биолог, НГПУ - 2007</p>
                                <p>Данные о повышении квалификации</p>
                                <p>г. Новосибирск, НГАСУ (Сибстрин), 2017г., &laquo;Основы использования
                                    информационно-коммуникативных технологий&raquo; (40&nbsp;часов);</p>
                                <p>г. Новосибирск, НГАСУ (Сибстрин), 2017г., «Современные педагогические технологии» (40
                                    часов).</p>
                                <p>Общий стаж работы&nbsp;&mdash; 14&nbsp;лет</p>
                                <p>Стаж работы по&nbsp;специальности&nbsp;&mdash; 14&nbsp;лет</p>
                            </div>
                        </div>

                    )}
                </div>

                <div className="employees">
                    <p onClick={() => handleCheck(3)}> Сурначева Ольга Лирьевна</p>
                    {check === 3 && (<div className="employees__profile">
                            <img
                                src="http://www.sibstrin.ru/files/vorotnikov/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%9B%D0%B8%D1%80%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0.JPG"
                                alt="photo"/>
                            <div className="employees__desc">
                                <p>Закончила НИСИ им. В.В. Куйбышева по&nbsp;специальности &laquo;Гидротехническое
                                    строительство речных сооружений и&nbsp;гидроэлектростанций&raquo;. Работала
                                    в&nbsp;Новосибирском государственном проектном институте в&nbsp;должности
                                    инженера-проектировщика. В&nbsp;1996 году пришла
                                    на&nbsp;кафедру &laquo;Теплогазоснабжения и&nbsp;вентиляции&raquo; в&nbsp;качестве
                                    старшего лаборанта. С&nbsp;1998 года работает специалистом
                                    по&nbsp;учебно-методической работе в&nbsp;деканате инженерно-экологического
                                    факультета, являясь высококвалифицированным специалистом и&nbsp;просто неравнодушным
                                    человеком.</p>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </section>
    );
};

export default Employees;