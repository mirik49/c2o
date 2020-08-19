import Button from "../pieces/Button";
import React from "react";
import Link from "next/link";
import Pages from "../../layouts/Pages";
import UserDataContainer from "../../wrappedComponents/UserDataContainer";

export default function renderPayOnline(props) {
    //отложено

    // const minimal = props.index.userData.minimal;
    // const isPartPay = props.index.userData ? minimal > 0 ? true : false : "";

    const isProlongation = props.index.userData ? props.index.userData.prolongation : "";

    return (
        <Pages>
            <UserDataContainer/>
            <div className="user-payment">
                <h2 className="user-payment__title">Погашение задолжности</h2>
                <div className="user-payment__wrapper">
                    {
                        isProlongation ?
                            <Link href={"/prolongation"}>
                                <a className="user-payment__button">
                                    Пролонгировать договор микрозайма
                                </a>
                            </Link> : null
                    }
                    <Link href={"/pay-full"}>
                        <a className="user-payment__button">
                            Оплатить онлайн (МаsterCard, Visa, МИР)
                        </a>
                    </Link>

                    {/*{isPartPay ?*/}
                    {/*    <Button*/}
                    {/*        className="user-payment__button"*/}
                    {/*        text="Частичная оплата"*/}
                    {/*        onClick={() => props.setActionData("action", 'showPayPart')}*/}
                    {/*    />*/}
                    {/*    : null*/}
                    {/*}*/}
                </div>
                <Button
                    className="user-payment__button-back"
                    text="Вернуться назад"
                    onClick={() => window.history.back()}
                />
            </div>
        </Pages>
    )
};
