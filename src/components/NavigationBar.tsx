import {FC} from "react";
import {Link, NavLink} from "react-router-dom";

import "../styles/NavigationBar.css"

const NavigationBar: FC<{links: {name: string, link: string}[]}> = (props) => {
    return (
        <div id="navigationBar">
            <ul className="nav">
                {props.links.map(value => {
                    return <li><NavLink to={value.link} className={(navData) => navData.isActive ? "activeNav nav" : "nav"}>{value.name.toUpperCase()}</NavLink></li>
                })}
            </ul>
        </div>
    )
}

export default NavigationBar