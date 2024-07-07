const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newDialogMessage = {
                id: state.messages.length + 1,
                message: state.newDialogMessageText,
            }
            state.messages.push(newDialogMessage)
            state.newDialogMessageText = "";
            break
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newDialogMessageText = action.newText;
            break
        }
        default: break;
    }

    return state
}

export let addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE, })
export let updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text, })

export default dialogsReducer