import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = () => {
    return (
        <div>
           <ProfileInfo />
           <MyPosts />
        </div>
    );
}

export default Profile;