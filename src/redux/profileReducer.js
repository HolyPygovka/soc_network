import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: '11'},
        {id: 2, message: 'My too', likesCount: '12'},
        {id: 3, message: 'My too', likesCount: '12'},
        {id: 4, message: 'My too', likesCount: '12'}
    ],
    newPostText: 'First text from state',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '6555'
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.textareaText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, textareaText: text});
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ( {type: SET_STATUS, status});

export const userProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;