import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import NewMessage from './Message/NewMessage/NewMessage';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messagesData.map(el =>  <Message message={el.message}/>);
    let dialogsElements = state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return(
        <div className={s.dialogs}>
           <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} placeholder="Enter your mess"
                        onChange={onNewMessageChange}
                         ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
                <NewMessage />
            </div>
        </div>
    );
}

export default Dialogs;