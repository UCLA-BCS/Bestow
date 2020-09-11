import React from "react";
import { Form} from 'semantic-ui-react';

function InputBox (props) {
    return (
        <Form.Field>
            <label className={props.labelClassName}>{props.labelName}</label>
            <input className={props.inputClassName} placeholder={props.placeHolder} />
        </Form.Field>
    )
};

export default InputBox