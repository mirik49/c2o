import React from "react";

export default function Footer(props) {
    const projectName = props.index.userData !== undefined ? props.index.userData.projectName : "";
    return (
        <footer className={"footer"}>
            <div className={"footer__block"}>
                <p className={"footer__block-text"}>
                    {projectName}
                </p>
            </div>
        </footer>
    )
}

