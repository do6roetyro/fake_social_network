// reducer это чистая ф. которая принимает текущий state, action. Модифицирует при 
// необходимости этот state по правилам иммутабельности (через копию state) и return new state.

import { act } from "react-dom/test-utils"

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING_STATE = 'TOGGLE_FETCHING_STATE'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_FETCHING_STATE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleFetchingStateAC = (isFetching) => ({ type: TOGGLE_FETCHING_STATE, isFetching })

export default usersReducer



//     {
//         id: 1,
//         fullName: 'Alexey M.',
//         location: {
//             country: 'Russia',
//             city: 'Saint-Petersburg',
//         },
//         isFollowed: true,
//         status: 'I like skateboarding',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJh01X4pOeldEaBQi2D8SQbjxLYMQJ7scOw&s'
//     },
//     {
//         id: 2,
//         fullName: 'Alice G.',
//         location: {
//             country: 'Japan',
//             city: 'Tokio',
//         },
//         isFollowed: false,
//         status: 'Today is rainy',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrohg9bF9kjXFjGPlv9-NENikfZ1BcUWarHA&s'
//     },
//     {
//         id: 3,
//         fullName: 'Mark F.',
//         location: {
//             country: 'Norway',
//             city: 'Oslo',
//         },
//         isFollowed: true,
//         status: 'Anybody playing bowling?',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIBhfo5P7MvncVGapdKh463p-NcrxvcBSbQ&s'
//     },