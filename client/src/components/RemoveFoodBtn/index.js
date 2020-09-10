import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveFoodBtn(props) {
  return (
    <div className="remove-food-btn" {...props} role="button" tabIndex="0">
    </div>
  );
}

export default RemoveFoodBtn;
