import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import NewMessage from './Message/NewMessage/NewMessage';

const Dialogs = (props) => {
    
    let messagesElements = props.dialogsState.messagesData.map(el =>  <Message message={el.message}/>);
    let dialogsElements = props.dialogsState.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);

    return(
        <div className={s.dialogs}>
           <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <NewMessage />
            </div>
        </div>
    );
}

export default Dialogs;