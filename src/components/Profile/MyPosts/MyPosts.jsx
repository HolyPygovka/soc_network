import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

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
                    <Field name="post"  
                        placeholder="Enter your post" 
                        component={Textarea}
                        validate={[required, maxLength10]} />
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