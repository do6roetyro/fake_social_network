const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
