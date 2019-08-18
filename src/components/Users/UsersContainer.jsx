import React from 'react';
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageCreator, setUsersTotalCountAC} from "../../redux/usersReducer";
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this
            .props
            .setUsers(response.data.items);
          this
            .props
            .setTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = (pageNumber) => {
      this
        .props
        .setCurrentPage(pageNumber);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this
            .props
            .setUsers(response.data.items)
        });
    }
  
    render() {
  
      return <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}/>
    }
  
  }

let mapStateToProps = (state) => {
  return {users: state.usersPage.users, pageSize: state.usersPage.pageSize, totalUsersCount: state.usersPage.totalUsersCount, currentPage: state.usersPage.currentPage}
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);