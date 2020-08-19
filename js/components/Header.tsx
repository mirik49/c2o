import React from "react";
import {
    MAIN_LOGO,
    PHONE_LOGO
} from "../constants/Constants";
import Link from "next/link";
import {formatPhone} from "../helpers/helpers";

export default function Header(props) {
    const {index} = props;
    const {userData} = index;
    let projectPhone;

    if (userData !== undefined) {
        if (userData.hasOwnProperty("projectPhone")) {
            projectPhone = userData.projectPhone !== undefined ? userData.projectPhone.toString() : "";
        }
    }

    const renderPhone = () => {
        return (
            <p className="header__logo-wrapper">
                <a href={"tel:" + projectPhone} className="header__phone">
                    <span className="header__phone-number">{formatPhone(projectPhone)}</span>
                    <span className="header__phone-text">Бесплатно по России</span>
                    <span className="header__phone-img">{PHONE_LOGO}</span>
                </a>
            </p>
        )
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <p className="header__logo-wrapper">
                    <Link href={"/"}>
                        {MAIN_LOGO}
                    </Link>
                </p>
                {projectPhone ? renderPhone() : null}
            </div>
        </header>
    )
}
