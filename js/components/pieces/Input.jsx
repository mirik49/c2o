import React, {useState} from "react";
import InputMask from 'react-input-mask';

export default function Input(props) {
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
    const renderData = () => {
        const data = props.data;
        return (
            <div className={props.className + "-data-wrapper"}>
                {
                    Object.keys(data).map((i) => {
                        return <div onClick={props.onClickData}
                                    {...renderAtributes(data[i].data)}
                                    key={i}>
                            {data[i].value}
                        </div>
                    })
                }
            </div>
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
    let error = props.error;
    const [isDragEnter, onDragEnter] = useState(false);
    const [isDragLeave, onDragLeave] = useState(false);
    const [isDragOver, onDragOver] = useState(false);
    const [isDragEnd, onDragEnd] = useState(false);

    const drag = () => {
        let drag = "";
        if (isDragEnter) {
            drag = "drag-enter";
        }
        if (isDragLeave) {
            drag = "drag-leave"
        }
        if (isDragEnd) {
            drag = "drag-end"
        }
        return drag;
    };
    return (
        <React.Fragment>
            <div className={error && props.type !== "file" ?
                props.className + "__input-" + props.type + "-wrapper" + " " + props.className + "__" + props.type + "-wrapper--error"
                : props.value ?
                    props.className + "__input-" + props.type + "-wrapper--full" + " " + props.className + "__input-" + props.type + "-wrapper" :
                    props.className + "__input-" + props.type + "-wrapper"}
                 onDrop={(e) => {
                     props.onDrop(e);
                     e.preventDefault();
                     e.stopPropagation();
                 }}
                 onDragEnter={(e) => {
                     onDragEnter(!isDragEnter);
                     e.preventDefault();
                     e.stopPropagation();
                 }}
                 onDragLeave={(e) => {
                     onDragLeave(!isDragLeave);
                     e.preventDefault();
                     e.stopPropagation();
                 }}
                 onDragOver={(e) => {
                     onDragOver(!isDragOver);
                     e.preventDefault();
                     e.stopPropagation();
                 }}
                 onDragEnd={(e) => {
                     onDragEnd(!isDragEnd);
                     e.preventDefault();
                     e.stopPropagation();
                 }}
            >
                <div
                    className={
                        error && props.type === "file" ?
                            props.className + "-field-wrapper" + " " + props.className + "-field-wrapper--error" :
                            props.type === "text" || props.type === "file" ?
                                props.className + "__field-wrapper " + drag() :

                                ""
                    }
                    // className={
                    //     error && props.type === "file" ?
                    //         props.className + "-field-wrapper" + " " + props.className + "-field-wrapper--error" :
                    //         props.type === "text" || props.type === "file" ?
                    //             isDragEnter ?
                    //                 props.className + "-field-wrapper wrapper drag-enter" :
                    //                 props.className + "-field-wrapper wrapper" :
                    //             ""
                    // }
                >
                    <InputMask
                        maskChar={" "}
                        mask={props.mask}
                        id={props.id}
                        type={props.type}
                        className={props.className + "__input-" + props.type}
                        onChange={props.onChange}
                        onClick={props.onClick}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        value={props.value}
                        defaultValue={props.defaultValue}
                        ref={props.ref}
                        placeholder={props.placeholder}
                        min={props.min}
                        max={props.max}
                        step={props.step}
                        name={props.name}
                        defaultChecked={props.defaultChecked}
                        checked={props.checked}
                        disabled={props.disabled}
                    >
                        {props.text}
                    </InputMask>
                    <label
                        htmlFor={props.id}
                        className={props.className + "__input-" + props.type + "-label"}
                    >
                    <span>
                        {error && props.value !== "file" ? "" : props.labelText}
                    </span>
                    </label>
                </div>
                <React.Fragment>
                    {props.showHint ? renderData() : ""}
                </React.Fragment>
                <React.Fragment>
                    {props.element}
                </React.Fragment>
                {error ? renderError() : ""}
            </div>
        </React.Fragment>
    )
}
