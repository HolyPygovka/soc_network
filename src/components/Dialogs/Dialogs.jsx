import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Petya'},
        {id: 5, name: 'Arsen'},
        {id: 6, name: 'Vartan'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Yo'}
    ]

    let messagesElements = messagesData.map(el =>  <Message message={el.message}/>);
    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);

    return(
        <div className={s.dialogs}>
           <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;