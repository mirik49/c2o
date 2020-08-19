import Input from "../pieces/Input";
import Button from "../pieces/Button";
import React, {useEffect, useState} from "react";
export interface ErrorInterface {
    type: any [],
}

export default function PayPart(props) {
    const userData = props.index.userData !== undefined ? props.index.userData : "";
    const data = props.index;
    useEffect(() => {
        setSum(userData.minimal);
    }, []);

    const [error, setError] = useState("");
    const [sum, setSum] = useState([]);

    // const createMask = () => {
    //     if (sum === userData.minimal) {
    //         return userData.minimal.toString().replace(/\d/g, "9");
    //     }
    //     return userData.total.toString().replace(/\d/g, "9");
    //
    // };

    const checkPaySum = (total) => {
        console.log(typeof error)
        // let finalSum = total.replace(/^\.|[^\d.]|\.(?=.*\.)|^0+(?=\d)/g, '');
        let finalSum = total.replace(/\.(?=.*\.)|\d+\.\d{3}|[^\d.-]/g, '');
        if (finalSum > userData.total) {
            error.length <= 0 ? setError("Сумма оплаты не должна превышать сумму долга") : null;
            return setSum(userData.total);
        } else if (finalSum < userData.minimal) {
            error.length <= 0 ? setError("Сумма оплаты не должна быть меньше минимальной суммы") : null;
            return setSum(finalSum);
        } else if (finalSum <= 0) {
            error.length <= 0 ? setError("Сумма оплаты не должна быть ноль") : null;
            return setSum(finalSum);
        }
        setError("");
        props.setActionData("paySum", finalSum);
        return setSum(finalSum);
    };

    return (
        <div className="pay-full-form">
            {/*{showPreloader ? preloader() : null}*/}
            <h2 className="pay-full-form__title">Погашение задолженности частично</h2>
            <div className="pay-full-form__wrapper">
                <Input
                    type="text"
                    // mask={createMask()}
                    className="pay-full-form"
                    placeholder={userData.minimal}
                    // defaultValue={userData.minimal}
                    // value={props.index.paySum === undefined ? userData.minimal : props.index.paySum}
                    value={sum}
                    onChange={(e) => {
                        // props.setActionData("paySum", e.target.value);
                        checkPaySum(e.target.value);
                    }}
                    error={error ? error : null}
                />
                <Input
                    type="text"
                    className="pay-full-form"
                    placeholder={userData.contract}
                    value={data.contractNumber ? data.contractNumber : ""}
                    onChange={(e) => props.setActionData("contractNumber", e.target.value)}
                />
                <Input
                    type="text"
                    className="pay-full-form"
                    placeholder={userData.fio}
                    value={data.name ? data.name : ""}
                    onChange={(e) => props.setActionData("name", e.target.value)}
                />
                <Input
                    type="text"
                    mask="+7 (999) 999-99-99"
                    className="pay-full-form"
                    placeholder="+7 (908) 136-12-40"
                    value={data.phone ? data.phone : ""}
                    onChange={(e) => props.setActionData("phone", e.target.value)}
                />

            </div>
            {/*<Input*/}
            {/*    id="offerCheckbox"*/}
            {/*    type="checkbox"*/}
            {/*    className="prolong-form"*/}
            {/*    defaultChecked={data.offerCheckbox}*/}
            {/*    // checked={data.offerCheckbox}*/}
            {/*    onClick={() => props.setActionData("offerCheckbox", !data.offerCheckbox)}*/}
            {/*    labelText={*/}
            {/*        <>Ознакомлен и полностью согласен с&nbsp;*/}
            {/*            <a href={"/"}>офертой (предложением) о заключении дополнительного соглашения к договору*/}
            {/*                микрозайма</a>*/}
            {/*        </>}*/}
            {/*/>*/}
            <Button
                className="pay-full-form__button"
                text="Оплатить задолженность"
                // disabled={!data.offerCheckbox}
                disabled={error.length > 0}
                onClick={
                    () => {
                        props.setActionData("showPreloader", true)
                        props.initFullPay(sum);

                    }
                }
            />
            <Button
                className="pay-full-form__button-back"
                text="Вернуться назад"
                onClick={() =>
                    props.setActionData("action", "showPayOnline")
                }
            />
        </div>
    )
};
