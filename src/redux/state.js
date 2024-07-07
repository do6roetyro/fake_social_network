import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer"
import sideBarReducer from "./sidebar_reducer";

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
        sideBar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;