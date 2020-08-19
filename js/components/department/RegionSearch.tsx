import React, {useEffect} from "react";
import "../../../scss/components/department/region.scss";

export default function RegionSearch(props) {
    useEffect(() => {
        props.getRegion();
    }, []);
    const region = props.index.region !== undefined ? props.index.region : "";

    const Region = () => {
        return (
            Object.keys(region).map((i, key) => {
                return (
                    <li key={key}
                        className="region__item-all">
                        <h3 className="region__title-all"><span>{i}</span></h3>
                        <ul className="region__list">
                            {
                                region[i].map((r, key) => {

                                        return (
                                            <li key={key}
                                                className="region__item"
                                                onClick={() => props.getCity(r.id)}
                                            > {r.name}</li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </li>
                )
            })
        )
    };

    return (
        <ul className="region__list-all">
            {Region()}
        </ul>
    )
};
