import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

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
                        ? <button
                            onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a1c48c24-1c33-4474-808e-1bce3f00f0bb"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(el.id);
                                        } 
                                    })


                            }}>Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "a1c48c24-1c33-4474-808e-1bce3f00f0bb"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(el.id);
                                    } 
                                })

                            

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

export default Users;