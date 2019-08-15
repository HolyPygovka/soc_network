import React from 'react';
import s from './../../Dialogs.module.css'

const NewMessage = () => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        alert(newMessageElement.current.value);
    }

    return(
        <div className={s.new_message_block}>
            <textarea ref={newMessageElement} ></textarea>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default NewMessage;