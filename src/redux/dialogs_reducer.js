const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hello, how are you?" },
        { id: 3, message: "I'm fine, and you?" },
    ],
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Boris' },
        { id: 3, name: 'Helena' },
        { id: 4, name: 'John' },
    ],
    newDialogMessageText: ""
}



// reducer это ф. которая принимает текущий state и action и return новый state.

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: state.newDialogMessageText }],
                newDialogMessageText: ""
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newDialogMessageText: action.newText
            }

        }
        default: return state;
    }
}

export let addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE, })
export let updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text, })

export default dialogsReducer