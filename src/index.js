import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import state, { addPost, textareaChanges, subscribe, store } from './redux/state'
import {BrowserRouter} from 'react-router-dom'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={state} addPost={addPost} textareaChanges={textareaChanges}/>
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
