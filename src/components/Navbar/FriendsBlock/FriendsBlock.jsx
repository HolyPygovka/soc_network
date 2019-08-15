import React from 'react';
import s from './FriendsBlock.module.css';
import OneFriend from './OneFriend/OneFriend';

const FriendsBlock = (props) => {
    let friends = props.friedsState.map((el) => <OneFriend friend={el} />);
    return(
        <div className={s.friends_block}>
            <p className="title">Friends</p>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    );
}

export default FriendsBlock;

