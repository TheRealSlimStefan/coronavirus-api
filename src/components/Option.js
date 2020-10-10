import React from "react";
import "../styles/Option.css";

const Option = (props) => {
return <option onClick={props.click}>{props.country.Country}</option>;
};

export default Option;
