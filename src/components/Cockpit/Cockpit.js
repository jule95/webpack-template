//React
import React from "react";
//HOC
import MyNavbar from "../../hoc/layout/MyNavbar";
const cockpit = props =>
{
    return <h3>{props.title}</h3>;
};

export default MyNavbar(cockpit);