const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        }
        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;