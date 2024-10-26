import axios from "axios";

const instanseAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "67674eff-90eb-4503-9455-b6c9a607d764" }
})

export const usersAPI = {
    getUsers: function (currentPage, pageSize) {
        return instanseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow: function (userId) {
        return instanseAxios.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    follow: function (userId) {
        return instanseAxios.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    login: function () {
        return instanseAxios.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: function (userId) {
        return instanseAxios.get(`profile/${userId}`)
            .then(response => response.data)
    }
}