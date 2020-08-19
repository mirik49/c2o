import React, {useEffect} from "react";
import RegionSearchContainer from "../../wrappedComponents/RegionSearchContainer";
import CitySearchContainer from "../../wrappedComponents/CitySearchContainer";
import DepartmentSearchContainer from "../../wrappedComponents/DepartmentSearchContainer";
import "../../../scss/components/department/departments.scss";
import Button from "../pieces/Button";
import {apiSetStat} from "../../services/Api";
import {statData} from "../../helpers/helpers";
import Pages from "../../layouts/Pages";

export default function Department(props) {

    if (process.browser) {
        useEffect(() => {
            const slug = props.index.userData !== undefined ? props.index.userData.userContract : ""
            if (slug) {
                apiSetStat(statData(slug, 3)).then();
            }
        }, []);
    }
    const data = props.index;

    const departmentAction = data.departmentAction !== undefined ? data.departmentAction : "";
    const back = (departmentAction) => {
        if (departmentAction === "ShowRegionSearch") {
            return window.history.back()
        } else if (departmentAction === "ShowCitySearch") {
            return props.setActionData("departmentAction", "ShowRegionSearch")
        } else if (departmentAction === "ShowDepartmentSearch") {
            return props.setActionData("departmentAction", "ShowCitySearch")
        }
    };
    return (
        <Pages>
            <section className="departments">
                <h3 className="departments__title">Погашение задолженности</h3>
                <Button
                    className="departments__btn-select"
                    text={
                        data.selectedCity !== undefined ? data.selectedCity : "Выбрать регион"
                    }
                    onClick={() => props.setActionData("departmentAction", "ShowRegionSearch")}
                />
                {departmentAction === "ShowRegionSearch" ? <RegionSearchContainer/> : null}
                {departmentAction === "ShowCitySearch" ? <CitySearchContainer/> : null}
                {departmentAction === "ShowDepartmentSearch" ? <DepartmentSearchContainer/> : null}
                <Button
                    className="departments__btn-back"
                    text="Вернуться назад"
                    onClick={() => departmentAction ? back(departmentAction) : window.history.back()}
                />
            </section>
        </Pages>
    )
};
