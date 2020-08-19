import Input from "../pieces/Input";
import Button from "../pieces/Button";
import React, {useEffect, useState} from "react";
import {apiGetProlongationData, apiSetStat} from "../../services/Api";
import {statData} from "../../helpers/helpers";
import Pages from "../../layouts/Pages";
import {preloader} from "../pieces/preloader";
import UserDataContainer from "../../wrappedComponents/UserDataContainer";

export default function Prolongation(props) {
    const data = props.index;
    const {showPreloader} = data;
    const [prolongationData, setProlongationData] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const {userData} = data;
        const responseData = {
            client: userData.userContract
        }
        apiGetProlongationData(responseData).then((response) => {
            setProlongationData(response);
            setLoading(false);
        })

        const slug = props.index.userData !== undefined ? props.index.userData.userContract : ""
        if (slug) {
            apiSetStat(statData(slug, 5)).then();
        }
    }, []);

    if (isLoading) {
        return preloader();
    }


    const formatExpirienseDate = (date) => {
        let formatDate = new Date(date);
        return formatDate.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'});
    }

    const renderProlongation = () => {
        return (
            <>
                <UserDataContainer prolong={prolongationData}/>
                <div className="prolong-form">
                    <h1 className="prolong-form__title">
                        Пролонгирование договора микрозайма
                    </h1>
                    <ul className="prolong-form__data-list">
                        <li className="prolong-form__data-item">
                            <p className="prolong-form__data-val">
                                Сумма займа:&nbsp;
                            </p>
                            <p className="prolong-form__data-data">
                                {prolongationData.prolongation_total_sum}<span
                                className="prolong-form__data-data--rouble">a</span>
                            </p>
                        </li>
                        <li className="prolong-form__data-item">
                            <p className="prolong-form__data-val">
                                Сумма процентов составит:&nbsp;
                            </p>
                            <p className="prolong-form__data-data">
                                {prolongationData.prolongation_percent_sum}<span
                                className="prolong-form__data-data--rouble">a</span>
                            </p>
                        </li>
                        <li className="prolong-form__data-item">
                            <p className="prolong-form__data-val">
                                Срок пролонгации:&nbsp;
                            </p>
                            <p className="prolong-form__data-data">
                                {prolongationData.prolongation_period} дней
                            </p>
                        </li>
                        <li className="prolong-form__data-item">
                            <p className="prolong-form__data-val">
                                Дата окончания пролонгации:&nbsp;
                            </p>
                            <p className="prolong-form__data-data">
                                {formatExpirienseDate(prolongationData.prolongation_date_extension)}
                            </p>
                        </li>
                    </ul>
                    <div className="prolong-form__summary">
                        <p className="prolong-form__summary-val">
                            Итого сумма для полного погашения
                            на {formatExpirienseDate(prolongationData.prolongation_date_extension)} составит
                        </p>
                        <p className="prolong-form__summary-data">
                            {prolongationData.prolongation_amount} <span
                            className="prolong-form__summary-data--rouble">a</span>
                        </p>
                    </div>
                    <Input
                        id="offerCheckbox"
                        type="checkbox"
                        className="prolong-form"
                        defaultChecked={data.offerCheckbox}
                        onClick={() => props.setActionData("offerCheckbox", !data.offerCheckbox)}
                        labelText={
                            <>Ознакомлен и полностью согласен с&nbsp;
                                <a href={prolongationData.offer_url} target="_blank">офертой (предложением) о заключении
                                    дополнительного соглашения к договору
                                    микрозайма</a>
                            </>}
                    />
                    <Button
                        className="prolong-form__button"
                        text="Пролонгировать договор микрозайма"
                        disabled={!data.offerCheckbox}
                        onClick={() => {
                            props.initFullPay();
                            props.setActionData("showPreloader", true);
                        }
                        }
                    />
                    <Button
                        className="prolong-form__button-back"
                        text="Вернуться назад"
                        onClick={() => window.history.back()}
                    />
                </div>
            </>
        )

    }

    return (
        <Pages>

            {showPreloader ? preloader() : renderProlongation()}
        </Pages>
    )
};
