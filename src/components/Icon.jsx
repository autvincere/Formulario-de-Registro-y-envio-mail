import React from 'react'
import IcoMoon from "react-icomoon";
// import IcoMoon, { iconList } from "react-icomoon";
const iconSet = require("../assets/icons/selection.json");

const Icon = ({ ...props }) => {
     // console.log(iconList(iconSet));
     return <IcoMoon iconSet={iconSet} {...props} />;
}

export default Icon
