import HeaderContainer from "../wrappedComponents/HeaderContainer";
import FooterContainer from "../wrappedComponents/FooterContainer";
import "../../scss/components/header.scss";
import React from "react";

export default function Pages({children}) {
    return (
        <main className="main">
            <HeaderContainer/>
            {children}
            <FooterContainer/>
        </main>
    )
}
