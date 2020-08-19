import React, {useEffect} from "react";
import UserDataContainer from "../../wrappedComponents/UserDataContainer";
import Router from "next/router";
import Pages from "../../layouts/Pages";
import "../../../scss/main.scss";
import {apiSetStat} from "../../services/Api";
import {statData} from "../../helpers/helpers";
import LoanPay from "./LoanPay";
import {preloader} from "../pieces/preloader"
import MenuContainer from "../../wrappedComponents/MenuContainer";

export default function Index(props) {

    if (process.browser) {
        useEffect(() => {
            props.getUserData(Router.asPath.slice(1));

        }, []);
        useEffect(() => {
            const slug = props.index.userData !== undefined ? props.index.userData.userContract : "";
            if (slug) {
                apiSetStat(statData(slug, 1)).then();
            }
            const isLoanPay = props.index.userData !== undefined ? props.index.userData.status === 1 : ""

            if (isLoanPay) {
                props.setActionData("action", 'loanPay')
            }
        }, [props.index.userData]);
    }

    const whatShow = () => {
        if (action === "loanPay") {
            return (
                <LoanPay/>
            )
        } else {
            return (
                <>
                    <UserDataContainer/>
                    <MenuContainer/>
                </>
            )
        }
    }

    const showPreloader = props.index.showPreloader;
    const action = props.index.action;

    return (
        <Pages>
            {showPreloader ? preloader() : whatShow()}
        </Pages>
    )
}
