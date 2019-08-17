import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
           <ProfileInfo />
           <MyPostsContainer />
        </div>
    );
}

export default Profile;