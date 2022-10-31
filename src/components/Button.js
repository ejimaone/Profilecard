import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <a href={props.href}>
      <button id="profiles">{props.title}</button>
    </a>
  );
}

export default Button;
