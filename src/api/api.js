import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a1c48c24-1c33-4474-808e-1bce3f00f0bb"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance            
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteFollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance
            .get(`profile/${id}`)
            .then(response => response.data)
    }
}