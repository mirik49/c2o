import * as React from "react";

export default function UserData(props) {
    const {prolong} = props.hasOwnProperty("prolong") ? props : "";
    const show = prolong ? prolong : props.index.showFormUserData;

    const renderData = (name, firstText, contractNumber, secondText, paySum, isExpired = false) => {

        return (
            <>
                <p className="user-data__data">
                    {name}, {firstText}
                    <span className="user-data__data-dec-bold">
                            &nbsp;{contractNumber}&nbsp;
                    </span>
                    {secondText}
                    <br/>
                    <span className="user-data__data-sum">
                        {paySum}&nbsp;
                        <span className="user-data__rouble">
                          a
                         </span>
                    </span>
                </p>
                {show === "showFormUserData" ?
                    <>
                        {/*<p className="user-data__data">*/}
                        {/*    Дата окончания договора:*/}
                        {/*    <span className="user-data__data-dec-bold">*/}
                        {/*        {contractEndDate}*/}
                        {/*    </span>*/}
                        {/*</p>*/}
                        {/*<p className="user-data__data">*/}
                        {/*    Итого сумма к оплате {contractEndDate}:*/}
                        {/*    <span className="user-data__data-dec-bold">*/}
                        {/*         {paySum}*/}
                        {/*    </span>*/}
                        {/*    <span className="user-data__rouble user-data__rouble--black">*/}
                        {/*        a*/}
                        {/*    </span>*/}
                        {/*</p>*/}
                    </>
                    : null
                }
                {isExpired ?
                    <p className="user-data__expired">{"Кол - во дней просрочки: "}
                        <span className="user-data__expired--bold">
                    {expiredDay}
                </span>
                    </p>
                    : null
                }
            </>
        )
    };

    const userData = props.index.userData !== undefined ? props.index.userData : "";
    const expiredDay = userData.day !== undefined ? userData.day : 0;
    const isExpiredDay = expiredDay.length > 0;
    const renderBaseData = () => {
        return renderData(userData.fio,
            "Ваша текущая задолженность по договору",
            userData.contract,
            "составляет",
            userData.total ? userData.total : userData.amount,
            isExpiredDay
        );
    };

    const renderProlongData = () => {
        return renderData(userData.fio,
            "для продления Вашего договора",
            userData.contract,
            " необходимо оплатить сумму % по займу",
            prolong.minimal,
            isExpiredDay,
        );
    };

    return (
        <section className="user-data">
            {!show ? renderBaseData() : null}
            {show ? renderProlongData() : null}
        </section>
    )
}
