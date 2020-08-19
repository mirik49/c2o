import Input from "../components/pieces/Input";
import React from "react";
import MobileDetect from "mobile-detect";

export const clearNumberField = (field) => {
    return field.replace(/[^-0-9]/gim, '');
};

export const renderTextInput = ({className: className, id: id, label: label, value: value, error: error, onFocus: onFocus, onChange: onChange, mask: mask}) => {
    return (
        <Input
            mask={mask}
            type="text"
            className={className}
            labelText={label}
            onFocus={() => onFocus(id)}
            error={error[id]}
            value={value[id]}
            onChange={(e) => onChange(e.target.value)}
        />
    )
};

export const renderData = (obj, className, first, second, third, onClick, params, firstText) => {
    return (Object.keys(obj).map((i, key) => {
        return (
            <li className={className + "__item"}
                onClick={() => params ? onClick(obj[i][params[0]], obj[i][params[1]]) : null}
                key={key}
            >
                <p className={className + "__text"}>{firstText ? firstText + " " + obj[i][first] : obj[i][first]}</p>
                <p className={className + "__text"}>{obj[i][second]}</p>
                <p className={className + "__text"}>{obj[i][third]}</p>
            </li>
        )
    }))

};

export const formatPhone = (projectPhone) => {
    return projectPhone.substring(0, 1) + " (" + projectPhone.substring(1, 4) + ") " + projectPhone.substring(4, 7) +
        "-" + projectPhone.substring(7, 9) + "-" + projectPhone.substring(9, 11);
};

export const statData = (slug, action) => {
    if (process.browser) {
        const navigator = window.navigator;
    let data = {}
    let md = new MobileDetect(window.navigator.userAgent);
    let device;
        let browser;
        if(md.mobile()) {
            device =md.mobile();
        } else if (md.phone()) {
            device = md.phone()
        } else if (md.tablet()) {
            device = md.tablet()
        } else  {
            device = md.os()
        }

        if (navigator.userAgent.indexOf("Chrome") !== -1) {
            browser = "Chrome"
        } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
            browser = "Firefox"
        } else if (navigator.userAgent.indexOf("Safari") !== -1) {
            browser = "Safari"
        } else if (navigator.userAgent.indexOf("Internet Explorer") !== -1) {
            browser = "Internet Explorer"
        } else if (navigator.userAgent.indexOf("Opera") !== -1) {
            browser = "Opera"
        } else if (navigator.userAgent.indexOf("BlackBerry") !== -1) {
            browser = "Mozilla"
        } else if (navigator.userAgent.indexOf("XiaoMi") !== -1) {
            browser = "MiuiBrowser"
            device = "XiaoMi"
        }

        data = {
            client: slug,
            browser: browser ? browser : md.userAgent(),
            device: device ? device : navigator.platform,
            action: action
        }

        return data;
    }
}
