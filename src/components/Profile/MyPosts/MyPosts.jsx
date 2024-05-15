import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, 
      postMessage: "hi, whatsuuuup", 
      likeCount: 15 },
    { id: 2, 
      postMessage: "it's my first project", 
      likeCount: 20 },
  ];

  return (
    <div className="my_posts">
      <h3>My Posts</h3>
      <div className="new_post">
        <p>New Post</p>
        <div className={style.post_input}>
          <textarea name="post" id="post" cols="30" rows="3"></textarea>
          <button >add post</button>
        </div>
      </div>
      <Post message={postsData[0].postMessage} likeCount={postsData[0].likeCount} />
      <Post message={postsData[1].postMessage} likeCount={postsData[1].likeCount} />
    </div>
  )
}

export default MyPosts;