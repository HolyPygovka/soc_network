import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div className={s.profile_info_img_block}>
                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                    alt="" />
            </div> */}
            <div className={s.description_block}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div><p>{props.profile.fullName}</p></div>
                <div>{props.profile.aboutMe}</div>
                <div><a href={`https://${props.profile.contacts.facebook}`}>facebook</a></div>
                <div>looking for job: {props.profile.lookingForAJob ? "+" : "-"}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;