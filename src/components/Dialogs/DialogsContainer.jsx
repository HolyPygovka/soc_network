import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {

  return <StoreContext.Consumer>
    {(store) => {

      let state = store.getState();

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      }
      return < Dialogs updateNewMessageBody = {
        onNewMessageChange
      }
      sendMessage = {
        onSendMessageClick
      }
      dialogsPage = {
        state.dialogsPage
      } />
  }
}
  </StoreContext.Consumer>
}

export default DialogsContainer;