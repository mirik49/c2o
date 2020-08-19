import React from "react";

export default function Button(props) {
    return (
        <React.Fragment>
            <button
                id={props.id}
                type="button"
                className={props.className}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                <span className={props.className + "-wrapper"}>
                    {props.text}
                </span>
            </button>
            {/*<p className={props.switch ? props.hintClass : "hide"}>*/}
            {/*    {props.hintText}*/}
            {/*</p>*/}
        </React.Fragment>
    )
}


