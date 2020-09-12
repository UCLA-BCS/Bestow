import React from "react";
import { Form} from 'semantic-ui-react';
import "./index.css";

function InputBox (props) {
    return (
        <Form.Field>
            <label className={props.labelClassName}>{props.labelName}</label>
            <input type={props.type} onChange={props.handleInputChange} name={props.name} value={props.value} className={props.inputClassName} placeholder={props.placeHolder} />
        </Form.Field>
    )
};

export default InputBox
