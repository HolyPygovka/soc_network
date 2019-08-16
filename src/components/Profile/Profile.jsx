import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
    return (
        <div>
           <ProfileInfo />
           <MyPosts posts={props.profileState.posts}
            addPost={props.addPost} 
            newPostText={props.profileState.newPostText}
            textareaChanges={props.textareaChanges} />
        </div>
    );
}

export default Profile;