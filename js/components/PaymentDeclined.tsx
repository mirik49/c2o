import React, {useEffect} from "react";
import Pages from "../layouts/Pages";
import "../../scss/components/declined.scss"
import Router from "next/router";
import UserDataContainer from "../wrappedComponents/UserDataContainer";

export default function PaymentDeclined(props) {
    // const {declineData} = props.index;

    if (process.browser) {
        useEffect(() => {

                props.getDataAfterPay(Router.query.extid, 3);

                // props.getDataAfterPay(declineData.payrefno, declineData.result, declineData.url)

        }, []);
    }

    return (
        <Pages>
            <UserDataContainer/>
            <section className="declined">
                <div className="declined__wrapper">
                    <p className="declined__text">
                        Произошла ошибка
                    </p>
                </div>
            </section>
        </Pages>
    )
}
