import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'It\'s my first post', likesCount: '11'},
        {id: 2, message: 'My too', likesCount: '12'}
    ]
    let postsElements = posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);

    return (
        <div className={s.posts_block}>
            <h3>
                my posts
            </h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>
                <div className={s.add_post_btn}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;