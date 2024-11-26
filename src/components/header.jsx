import React from "react";

const Header = () =>
{
return (
    <li>
        <h1 className="Loginheading">         ABES Quiz Platform         </h1>
        <h3 className="LoginLable">Contestent name:</h3>
        <input type="text"></input>
        <input type="button">Start Quiz</input>
    </li>)
}

export default Header;
