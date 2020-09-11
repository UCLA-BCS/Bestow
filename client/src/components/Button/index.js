import React from "react";
import { Button, Icon } from 'semantic-ui-react';

function ButtonUi (props) {
    return (
        <Button color={props.color} onClick={props.handleSubmit}>
                  {props.text} 
      </Button>
    )
};

export default ButtonUi