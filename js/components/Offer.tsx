import React, {useEffect, useState} from "react";
import Button from "./pieces/Button";
import {preloader} from "./pieces/preloader";
import {apiDownloadOffer} from "../services/Api";
import "../../scss/components/offer.scss";

export default function Offer(props) {
    useEffect(() => {
        props.setActionData("showPreloader", true)
        props.getOffer();
    }, []);

    const [localShowPreloader, setShowPreloader] = useState(false)
    const {index} = props;
    const {showPreloader} = index;
    const offer = props.index.hasOwnProperty("userOffer") ? props.index.userOffer : "";
    const downloadOffer = () => {

        const {userData} = index;
        const data = {
            client: userData.userContract
        };

        apiDownloadOffer(data)
            .then((response) => {
                setShowPreloader(false);
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "offer.pdf")
                document.body.appendChild(link);
                link.click();
            })

    }

    const renderOffer = () => {
        return (
            <section className="offer">
                <div dangerouslySetInnerHTML={{__html: offer}}>
                </div>
                <div className="offer_btn-wrapper">
                    <Button
                        className="offer__btn--back"
                        text="Назад"
                        onClick={() => window.history.back()}
                    />
                    <Button
                        className="offer__btn"
                        text="Скачать"
                        onClick={() => {
                            downloadOffer();
                            setShowPreloader(true);
                        }}
                    />
                </div>
                {localShowPreloader ? preloader() : null}
            </section>
        )
    }

    return showPreloader ? preloader() : renderOffer();
}
