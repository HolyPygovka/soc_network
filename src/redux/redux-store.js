import {createStore, combineReducers} from 'redux'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sitebarReducer from './sitebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sitebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;