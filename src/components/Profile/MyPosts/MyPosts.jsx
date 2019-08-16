import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.textareaChanges('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.textareaChanges(text);
    }

    return (
        <div className={s.posts_block}>
            <h3>
                my posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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