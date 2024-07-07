const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

    personalInfos: [
        { id: 1, personalinfo: "Date of Birth: 21 march" },
        { id: 2, personalinfo: "City: SPB" },
        { id: 3, personalinfo: "Education: MGTU'16" },
        { id: 4, personalinfo: "Web Site: https://it-cool.com" },
    ],
    newPostText: "yo yo yo"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                postMessage: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = "";
            break
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            break
        }
        default: break;
    }

    return state
}

export let addPostActionCreator = () => ({ type: ADD_POST, });
export let updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default profileReducer
