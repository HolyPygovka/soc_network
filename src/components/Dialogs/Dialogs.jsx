import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import NewMessage from './Message/NewMessage/NewMessage';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let messagesElements = props.store.state.dialogsPage.messagesData.map(el =>  <Message message={el.message}/>);
    let dialogsElements = props.store.state.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
    let newMessageBody = props.store.state.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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