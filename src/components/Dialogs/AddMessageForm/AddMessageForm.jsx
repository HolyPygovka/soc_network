import React from 'react';
import {Field} from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your mess"
                    validate={[required, maxLength20]}  />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export default AddMessageForm;