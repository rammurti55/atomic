// Button.js
import React from "react";
import theme from "../../../Theme";

const Button = (props) => {
  return <button onClick={props.onClick} style={{
    border:"1px solid",
    borderRadius:"10px",
    // padding:"12px",
    background:"lightgreen",
    marginRight:"10px",
    // color:theme.palette.primary.main,
    ...props.sx
  }}>{props.children}</button>;
};

export default Button;
