import { usersAPI } from "../api/api"

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING_STATE = 'TOGGLE_FETCHING_STATE'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state
    }
}

export const approveFollowAC = (userId) => ({ type: FOLLOW_USER, userId })
export const approveUnfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleFetchingStateAC = (isFetching) => ({ type: TOGGLE_FETCHING_STATE, isFetching })
export const toggleFollowingInProgressAC = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    
    return (dispatch) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(toggleFetchingStateAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleFetchingStateAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(40))
            })
    }
}

export const toggleFollowThunkCreator = (userId, isFollowed) => (dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        const apiMethod = isFollowed ? usersAPI.unfollow : usersAPI.follow
        const actionCreator = isFollowed ? approveUnfollowAC : approveFollowAC
        apiMethod(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(actionCreator(userId))
                    dispatch(toggleFollowingInProgressAC(false, userId))
                }
            })
    }

export default usersReducer
