import React from 'react';
import s from './Users.module.css'

let Users = (props) => {

    if (props.users.length == 0) {
        props.setUsers( [
            {
              id: 1,
              photoUrl: 'https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg',
              followed: false,
              fullName: 'Alex',
              status: 'I like cats',
              location: {
                city: 'Minsk',
                country: 'Belarus'
              }
            }, {
              id: 2,
              photoUrl: 'https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg',
              followed: true,
              fullName: 'Victor',
              status: 'I play',
              location: {
                city: 'Brest',
                country: 'Belarus'
              }
            }, {
              id: 3,
              photoUrl: 'https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg',
              followed: true,
              fullName: 'John',
              status: 'I am bissy',
              location: {
                city: 'Minsk',
                country: 'Belarus'
              }
            }, {
              id: 4,
              photoUrl: 'https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg',
              followed: false,
              fullName: 'Lila',
              status: 'I am happy',
              location: {
                city: 'Moscow',
                country: 'Russia'
              }
            }
          ]);
    }


  return <div>
    {props
      .users
      .map(el => <div key={el.id}>
        <span>
          <div>
            <img src={el.photoUrl} className={s.user_img} alt=""/>
          </div>
          <div>
            {el.followed
              ? <button
                  onClick={() => {
                  props.unfollow(el.id)
                }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(el.id)
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{el.fullName}</div>
            <div>{el.status}</div>
          </span>
          <span>
            <div>{el.location.country}</div>
            <div>{el.location.city}</div>
          </span>
        </span>
      </div>)
}
  </div>
}

export default Users;