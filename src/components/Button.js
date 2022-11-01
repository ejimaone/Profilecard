import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <a href={props.href} id={props.id} className="links">
      <div className={`${props.id} profiles`}>{props.title}</div>
    </a>
  );
}

export default Button;
