import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
           <ProfileInfo profile={props.profile}
                status={props.status} 
                updateStatus={props.updateStatus} />
           <MyPostsContainer />
        </div>
    );
}

export default Profile;