import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfile } from '../../redux/profileReducer';
import {withRouter, Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.userProfile(this.props.match.params.userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login" />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {userProfile})(WithUrlDataContainerComponent);