import React from 'react';
import s from './../FriendsBlock.module.css';

const OneFriend = (props) => {
    return(
        <div className={s.one_friend}>
            <img src="https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg" alt=""/>
            <p className={s.friend_name}>{props.friend.name}</p>
        </div>
    );
}

export default OneFriend;