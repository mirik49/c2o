import React from "react";
import Pages from "../layouts/Pages";
import "../../scss/components/not-found.scss"

export default function NotFound(props) {
    const error = props.index.userNotFound;
    return (
        <Pages>
            <section className={"not-found"}>
                <div className={"not-found__wrapper"}>
                    <p className="not-found__text">
                        {error !== undefined ? error : "Перейдите пожалуйста по ссылке, которая была Вам отправленна в смс."}
                    </p>
                </div>
            </section>
        </Pages>
    )
}

