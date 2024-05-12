import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className="my_posts">
      My Posts
      <div className="new_post">
        <p>New Post</p> 
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>add post</button>
      </div>
     <Post message='hi, whatsuuuup' likeCount='15' dislikeCount='2'/>
     <Post message="it's my first project" likeCount='20' dislikeCount='2'/>
    </div>
  )
}

export default MyPosts;