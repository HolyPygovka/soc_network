import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="http://cdn.collider.com/wp-content/uploads/2019/03/avatar-movie-sam-worthington.jpg" alt="" />
            {props.message}
            <div>
                <span>like <span className="like_counts">{props.likesCount}</span></span>
            </div>
        </div>
    );
}

export default Post;