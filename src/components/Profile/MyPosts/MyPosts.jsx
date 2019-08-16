import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
    let postsElements = props.state.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    let newPostElement = React.createRef(); 

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action= updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.posts_block}>
            <h3>
                my posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
                </div>
                <div className={s.add_post_btn}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;