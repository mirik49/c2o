import Input from "../pieces/Input";
import Button from "../pieces/Button";
import React, {useEffect} from "react";
import {apiSetStat} from "../../services/Api";
import {statData} from "../../helpers/helpers";
import Pages from "../../layouts/Pages";
import {preloader} from "../pieces/preloader";

export default function PayFull(props) {

    if (process.browser) {
        useEffect(() => {
            const slug = props.index.userData !== undefined ? props.index.userData.userContract : ""
            if (slug) {
                apiSetStat(statData(slug, 4)).then();
            }
        }, []);
    }
    const userData = props.index.userData !== undefined ? props.index.userData : "";
    const data = props.index;
    const showPreloader = data.showPreloader;

    const renderFullPay = () => {
        return (
            <div className="pay-full-form">
                <h2 className="pay-full-form__title">Погашение задолженности полностью</h2>
                <div className="pay-full-form__wrapper">
                    <Input
                        type="text"
                        mask="99 9999,99"
                        className="pay-full-form"
                        placeholder={userData.total}
                        value={data.sum ? data.sum : ""}
                        onChange={(e) => props.setActionData("sum", e.target.value)}
                        disabled={"disabled"}
                    />
                    <Input
                        type="text"
                        className="pay-full-form"
                        placeholder={userData.contract}
                        value={data.contractNumber ? data.contractNumber : ""}
                        onChange={(e) => props.setActionData("contractNumber", e.target.value)}
                        disabled={"disabled"}
                    />
                    <Input
                        type="text"
                        className="pay-full-form"
                        placeholder={userData.fio}
                        value={data.name ? data.name : ""}
                        onChange={(e) => props.setActionData("name", e.target.value)}
                        disabled={"disabled"}
                    />
                    <Input
                        type="text"
                        mask="+7 (999) 999-99-99"
                        className="pay-full-form"
                        placeholder="+7 (908) 136-12-40"
                        value={data.phone ? data.phone : ""}
                        onChange={(e) => props.setActionData("phone", e.target.value)}
                        disabled={"disabled"}
                    />

                </div>
                <Button
                    className="pay-full-form__button"
                    text="Оплатить задолженность"
                    onClick={() => {
                        props.setActionData("showPreloader", true);
                        props.initFullPay(0, true);
                    }}
                />
                <Button
                    className="pay-full-form__button-back"
                    text="Вернуться назад"
                    onClick={() => window.history.back()}
                />
            </div>
        )
    }

    return (
        <Pages>
            {showPreloader ? preloader() : renderFullPay()}
        </Pages>
    )
};
