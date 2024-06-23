import { rerenderEntireTree } from "../render"

let state = {
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


    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        postMessage: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export let addNewMessage = () => {
    let newDialogMessage = {
        id: 4,
        message: state.dialogsPage.newDialogMessageText,
    }
    state.dialogsPage.messages.push(newDialogMessage)
    state.dialogsPage.newDialogMessageText = "";
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newDialogMessageText = newText;
    rerenderEntireTree(state)
}

export default state