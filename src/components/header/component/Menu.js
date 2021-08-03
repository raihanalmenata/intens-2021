// import { Link } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.less";

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <Link to="/product"><li> Products </li></Link>
                <li> Contact </li>
                <li> About </li>
            </ul>
        </div>
    )
}

export default Menu;