import React from "react";
import Pages from "../layouts/Pages";
import "../../scss/components/service.scss";

export default function Service(props) {

    const error = props.index.userNotFound;
    return (
        <Pages>
            <section className={"sevrice"}>
                <div className={"sevrice__wrapper"}>
                    <p className="service__text">
                        Извините, ресурс временно недоступен, ведутся технические работы!
                    </p>
                </div>
            </section>
        </Pages>
    );

}

