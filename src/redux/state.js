const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
            newDialogMessageText: "hey bro"
        },
        siteBar: {
            friends: [
                {
                    id: 1,
                    name: "Boris",
                    avatarUrl: "https://masterpiecer-images.s3.yandex.net/6bbfdce3a42011eea88d5601f9285731:upscaled"
                },
                {
                    id: 2,
                    name: "Helena",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ9yoq1_m8m35v5TETYctLBWt4lLm8iy-jA&s"
                },
                {
                    id: 3,
                    name: "John",
                    avatarUrl: "https://cs14.pikabu.ru/post_img/2023/10/28/2/169845643817422827.jpg"
                }
            ]


        },
    },

    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    postMessage: this._state.profilePage.newPostText,
                    likeCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state)
                break
            }
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state)
                break
            }
            case ADD_NEW_MESSAGE: {
                let newDialogMessage = {
                    id: this._state.dialogsPage.messages.length + 1,
                    message: this._state.dialogsPage.newDialogMessageText,

                }
                this._state.dialogsPage.messages.push(newDialogMessage)
                this._state.dialogsPage.newDialogMessageText = "";
                this._callSubscriber(this._state)
                break
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                this._state.dialogsPage.newDialogMessageText = action.newText;
                this._callSubscriber(this._state)
                break
            }
            default: break;
        }
    }
}


export let addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export let addMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE,
    }
}

export let updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

export default store;
window.store = store;