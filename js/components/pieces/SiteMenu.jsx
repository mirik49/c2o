import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function SiteMenu(props) {
    const [showAboutCompany, onAboutCompany] = useState(false);
    const [showClients, onClients] = useState(false);
    const [showCareer, onCareer] = useState(false);

    const renderItem = (text, key) => {
        return (
            <li className={props.mainBlock + "__item"} key={key}>
                <a className={props.mainBlock + "__item-link"}>{text}</a>
            </li>
        );
    };

    const aboutCompany = () => {
        return (
            <React.Fragment>
                <ul className={props.mainBlock + "__list"}>
                    {[
                        "История становления",
                        "Достижения и награды",
                        "Документация",
                        "Благотворительность",
                        "Новости",
                        "Информация инвесторам",
                        "Структура сайта",
                    ].map(renderItem)}
                </ul>
            </React.Fragment>
        )
    };

    const clients = () => {
        return (
            <React.Fragment>
                <ul className={props.mainBlock + "__list"}>
                    {[
                        "Оформить заявку",
                        "Личный кабинет",
                        "Вопросы и ответы",
                        "Блог",
                        "Отзывы клиентов",
                        "Политика конфиденциальности",
                        "Города выдачи"
                    ].map(renderItem)}
                </ul>
            </React.Fragment>
        )
    };

    const career = () => {
        return (
            <React.Fragment>
                <ul className={props.mainBlock + "__list"}>
                    {[
                        "Вакансии",
                        "Истории успеха",
                        "Корпоративный университет",
                        "Достижения HR",
                    ].map(renderItem)}
                </ul>
            </React.Fragment>
        )
    };

    return (
        <React.Fragment>
            <div className={props.mainBlock + "__block"}>
                <h2 className={showAboutCompany ? props.mainBlock + "__block-title selected" : props.mainBlock + "__block-title"}
                    tabIndex={1}
                    onClick={() => onAboutCompany(!showAboutCompany)}
                >
                    О компании
                </h2>

                {showAboutCompany ? aboutCompany() : ""}

            </div>
            <div className={props.mainBlock + "__block"}>
                <h2 className={showClients ? props.mainBlock + "__block-title selected" : props.mainBlock + "__block-title"}
                    tabIndex={1}
                    onClick={() => onClients(!showClients)}
                >
                    Клиентам
                </h2>

                {showClients ? clients() : ""}

            </div>
            <div className={props.mainBlock + "__block"}>
                <h2 className={showCareer ? props.mainBlock + "__block-title selected" : props.mainBlock + "__block-title"}
                    tabIndex={1}
                    onClick={() => onCareer(!showCareer)}
                >
                    Карьера
                </h2>

                {showCareer ? career() : ""}

            </div>
        </React.Fragment>
    )
}

SiteMenu.propTypes = {
    mainBlock: PropTypes.string
};
