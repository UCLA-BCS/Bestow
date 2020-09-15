import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import "./index.css"

function ButtonUi (props) {
    return (
        <Button color={props.color} className="btnCss" onClick={props.handleSubmit}>
                  {props.text} 
      </Button>
    )
};

export default ButtonUi