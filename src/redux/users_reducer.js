// reducer это чистая ф. которая принимает текущий state, action. Модифицирует при 
// необходимости этот state по правилам иммутабельности (через копию state) и return new state.

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
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
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, isFollowed: true } : user)
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, isFollowed: false } : user)
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default: return state
    }

}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer