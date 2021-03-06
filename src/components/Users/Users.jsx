import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(el => {
                return <span
                    key={el}
                    className={props.currentPage === el && s.selected_page}
                    onClick={(e) => {
                        props.onPageChanged(el)
                    }}>{el}</span>
            })}
        </div>
        {props.users.map(el => <div key={el.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + el.id}>
                        <img
                            src={el.photos.small != null
                                ? el.photos.small
                                : userPhoto}
                            className={s.user_img}
                            alt="" />
                    </NavLink>
                </div>
                <div>{el.followed
                    ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                        onClick={() => { props.unfollow(el.id); }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === el.id)}
                        onClick={() => { props.follow(el.id); }}>Follow</button>}
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

export default Users;