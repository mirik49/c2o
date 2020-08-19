import React from "react";
import Link from "next/link";

export default function Menu(props) {
    const projectPhone = props.index.userData ? props.index.userData.projectPhone : "";
    return (
        <div className="user-action__wrapper">
            <Link href={"/pay-online"}>
                <a className="user-action__button">
                    Оплатить онлайн (МаsterCard, Visa, МИР)
                </a>
            </Link>
            <Link href={"/offices"}>
                <a className="user-action__button">
                    Оплатить в офисе компании
                </a>
            </Link>
            <a
                className="user-action__button--bottom user-action__button"
                href={"tel:" + projectPhone}
            >Позвонить для уточнения деталей
            </a>
            <Link href={"/refuse"}>
                <a className="user-action__button--bottom user-action__button">
                    Я не буду оплачивать
                </a>
            </Link>
        </div>
    )
};
