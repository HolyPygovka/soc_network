import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";

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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = sitebarReducer(this._state.siteBar, action);

        this._callSubscriber(this._state);
        
    }
}

export default store;