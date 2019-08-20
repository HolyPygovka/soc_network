import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
    const addNewPost = (newPost) => {
        props.addPost(newPost.post);
    }
    let postsElements =
        props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} />);
    
        return (
        <div className={s.posts_block}>
            <h3>my posts</h3>
            <MyPostsReduxForm onSubmit={addNewPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

const MyPostsForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field name="post"  placeholder="Enter your post" component="textarea" />
                </div>
                <div className={s.add_post_btn}>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    );
}

const MyPostsReduxForm = reduxForm({form: 'myPostForm'})(MyPostsForm);

export default MyPosts;