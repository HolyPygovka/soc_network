import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    return (
        <div>
           <ProfileInfo />
           <MyPosts state={props.state}
            dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;