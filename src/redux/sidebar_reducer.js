let initialState = {
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

const sideBarReducer = (state = initialState, action) => {
    return state
}

export default sideBarReducer;
