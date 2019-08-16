export let store ={
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
        ]
    },
    siteBar: {
        friends: [
            {id: 1, name: 'Ilya'},
            {id: 2, name: 'Lilya'},
            {id: 3, name: 'Misha'}
        ]
    },
    rerenderEntireTree() {
        console.log("state changed");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: '555'
        }
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);
    },
    textareaChanges(textareaText) {
        state.profilePage.newPostText = textareaText;
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer
    },
    opa() {
        console.log("opa");
    }
}
store.opa();


let rerenderEntireTree = () => {
    console.log("state changed");
}
let state = {
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
        ]
    },
    siteBar: {
        friends: [
            {id: 1, name: 'Ilya'},
            {id: 2, name: 'Lilya'},
            {id: 3, name: 'Misha'}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '555'
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const textareaChanges = (textareaText) => {
    state.profilePage.newPostText = textareaText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;