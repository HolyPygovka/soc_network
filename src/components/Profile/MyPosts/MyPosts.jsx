import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="11" />
                <Post message="It's my first post" likesCount="22" />
            </div>
        </div>
    );
}

export default MyPosts;