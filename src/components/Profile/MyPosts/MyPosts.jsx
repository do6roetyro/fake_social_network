import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.postMessage} likeCount={post.likeCount} />)

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
      {postsElements}
    </div>
  )
}

export default MyPosts;