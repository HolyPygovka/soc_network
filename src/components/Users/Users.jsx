import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this
          .props
          .setUsers(response.data.items)
      });
  }
  
  render() {
    return <div>
      {this
        .props
        .users
        .map(el => <div key={el.id}>
          <span>
            <div>
              <img
                src={el.photos.small != null
                ? el.photos.small
                : userPhoto}
                className={s.user_img}
                alt=""/>
            </div>
            <div>
              {el.followed
                ? <button
                    onClick={() => {
                    this
                      .props
                      .unfollow(el.id)
                  }}>Unfollow</button>
                : <button
                  onClick={() => {
                  this
                    .props
                    .follow(el.id)
                }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{el.name}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{"el.location.country"}</div>
              <div>{"el.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  }

}

export default Users;