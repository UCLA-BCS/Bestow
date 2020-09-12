import React from "react";
import "./style.css";
import removebutton from "/images/remove-food-btn.png";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBtn(props) {
  return (
    <img src={ removebutton } role="button" tabIndex="0" onClick={() => props.removebtn(props.id)}/>
  );
}

export default RemoveBtn;
