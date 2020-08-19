import React, {useEffect} from "react";
import Pages from "../layouts/Pages";
import "../../scss/components/success.scss"
import Router from "next/router";
// import UserDataContainer from "../wrappedComponents/UserDataContainer";

export default function PaymentSuccess(props) {
    if (process.browser) {
        useEffect(() => {


                props.getDataAfterPay(Router.query.extid, 2);

                //из за того что это другая платежка
                // if (Router.query.result === '1') {
                //     props.setActionData("declineData", {
                //         extid: Router.query.extid
                //     })
                //     Router.push('declined');
                // } else {
                //
                //     props.getDataAfterPay(Router.query.payrefno, Router.query.result, window.location.href)
                // }


        }, []);
    }
    const userData = props.index.hasOwnProperty('userData') ? props.index.userData : "";
    let prolongation;
    if (userData.hasOwnProperty('prolongation')) {
        prolongation = props.index.userData.prolongation;
    }
    return (
        <Pages>
            <section className="success" style={{display: "flex", justifyContent: "center"}}>
                <p style={{textAlign: "center", width: "50%"}}>
                    <strong>{userData.fio}</strong>, Ваш договор
                    микрозайма <strong>{userData.contract}</strong> успешно {prolongation ? "продлен" : "погашен"}
                </p>
                <p style={{textAlign: "center", width: "50%"}}>
                    Пакет документов по операции возможно получить в офисе компании или в Вашем личном кабинете после
                    подтверждения операции банком.
                </p>
                <a href={userData.login_url}>{userData.login_url}</a>
                <div className="success__wrapper">
                    <p className="success__text">
                        Спасибо, оплата прошла успешно.
                    </p>
                </div>
            </section>
        </Pages>
    )
}
