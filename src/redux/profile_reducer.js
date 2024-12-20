import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';


let initialState = {
    posts: [
        {
            id: 1,
            postMessage: "hi, whatsuuuup",
            likeCount: 15
        },
        {
            id: 2,
            postMessage: "it's my first project",
            likeCount: 20
        },
    ],
    newPostText: "",
    profile: null,
    userId: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    postMessage: state.newPostText,
                    likeCount: 0
                }],
                newPostText: ""
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default: return state;
    }
}

export let addPostAC = () => ({ type: ADD_POST, });
export let updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });
export let setProfileAC = (profile) => ({ type: SET_PROFILE, profile })
export const setProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setProfileAC(data))
    })
}


export default profileReducer
