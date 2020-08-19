import React, {useState} from "react";

export default function Select(props) {
    const renderAtributes = (data) => {
        let arr = [];
        if (props.dataAtr) {
            arr = props.dataAtr.split(/\s*,\s*/);
        }

        let obj = {};
        arr.map((i) => {
            obj[i] = data[i] ? data[i] : "";
        });
        return (obj);
    };
    const renderList = () => {
        return (
            <ul className={props.className + "-select-list"}>
                {
                    Object.keys(props.data).map((i) => {
                        return <li
                            onClick={(e) => {
                                props.onClick(e.currentTarget);
                                onShowSelectList(!showSelectList);
                                setSelectedValue(e.currentTarget.textContent)
                            }}
                            key={i}
                            className={props.className + "-select-item"}
                            {...renderAtributes(props.data[i])}
                        >
                            {props.data[i].title}
                        </li>
                    })
                }
            </ul>
        )
    };
    const renderError = () => {
        return (
            <React.Fragment>
                {error ? error.map((i) => {
                    return <p className={props.className + "-input-error"} key={i}>{i}</p>
                }) : ""}
            </React.Fragment>
        )
    };
    const [showSelectList, onShowSelectList] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const error = props.error;
    return (
        <React.Fragment>
            <div
                onClick={() => onShowSelectList(!showSelectList)}
                className={error ? props.className + "-select-wrapper" + " " + props.className + "-select-wrapper--error" :
                    props.className + "-select-wrapper"}>
                <h3
                    onClick={() => onShowSelectList(!showSelectList)}
                    className={props.className + "-select-title"}
                >{selectedValue ? selectedValue : props.title}</h3>
                {showSelectList ? renderList() : ""}
                <button

                    type={"button"}
                    onClick={() => {
                        onShowSelectList(!showSelectList)
                    }}
                    className={ showSelectList ? props.className + "-select-btn" + " " + props.className + "-select-btn--active" : props.className + "-select-btn"}/>

            </div>
            {error ? renderError() : ""}
        </React.Fragment>
    )
}

