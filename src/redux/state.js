const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likesCount: '11'},
                {id: 2, message: 'My too', likesCount: '12'},
                {id: 3, message: 'My too', likesCount: '12'},
                {id: 4, message: 'My too', likesCount: '12'}
            ],
            newPostText: 'First text from state'
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'Yo'}
            ],
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Kolya'},
                {id: 3, name: 'Ira'},
                {id: 4, name: 'Petya'},
                {id: 5, name: 'Arsen'},
                {id: 6, name: 'Vartan'}
            ],
            newMessageBody : ""
        },
        siteBar: {
            friends: [
                {id: 1, name: 'Ilya'},
                {id: 2, name: 'Lilya'},
                {id: 3, name: 'Misha'}
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { // { type: 'ADD-POST' }
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '6555'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.textareaText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messagesData.push({id: 6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, textareaText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default store;