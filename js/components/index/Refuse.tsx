import React, {useEffect} from "react";
import Button from "../pieces/Button";
import {apiSetStat} from "../../services/Api";
import {statData} from "../../helpers/helpers";
import Pages from "../../layouts/Pages";

export default function Refuse(props) {
    if (process.browser) {
        useEffect(() => {
            const slug = props.index.userData !== undefined ? props.index.userData.userContract : ""
            if (slug) {
                apiSetStat(statData(slug, 2)).then();
            }
        }, []);
    }
    return (
        <Pages>
            <section className="refuse">
                <div className="refuse__wrapper">
                    <p className="refuse__text">
                        Спасибо за Ваш ответ!
                    </p>
                </div>
                <Button
                    className="pay-full-form__button-back"
                    text="Вернуться назад"
                    onClick={() => window.history.back()}
                />
            </section>
        </Pages>
    )
}

