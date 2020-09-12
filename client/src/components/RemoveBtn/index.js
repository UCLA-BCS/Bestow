import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBtn(props) {
  return (
    <img src="/images/remove-food-btn.png" role="button" tabIndex="0" onClick={() => props.removebtn(props.id)}/>
  );
}

export default RemoveBtn;