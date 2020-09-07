import React from 'react'
import IcoMoon from "react-icomoon";
// import IcoMoon, { iconList } from "react-icomoon";
const iconSet = require("../assets/icons/selection.json");

const Icon = ({ className, ...props }) => {
     // console.log(iconList(iconSet));
     // console.log(props)
     return <IcoMoon iconSet={iconSet} {...props} className={className}/>;
}

export default Icon
