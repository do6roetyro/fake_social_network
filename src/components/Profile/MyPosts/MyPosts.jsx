import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className="my_posts">
      My Posts
      <div className="new_post">
        New Post
      </div>
     <Post />
     <Post />
    </div>
  )
}

export default MyPosts;