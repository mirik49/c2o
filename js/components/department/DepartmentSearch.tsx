import React from "react";
import {renderData} from "../../helpers/helpers"
import "../../../scss/components/department/department.scss"

export default function (props) {
    const departments = props.index.departments !== undefined ? props.index.departments : "";
    return (
        <ul className="department__list">
            {renderData(departments, "department", "number", "address", "short_schedule", {},null, "ЦВЗ№ ")}
        </ul>
    )
};
