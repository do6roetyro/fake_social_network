import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { createRef } from "react";

const MyPosts = (props) => {
  console.log(props)
  let postsElements = props.posts.map((post) => (
    <Post message={post.postMessage} likeCount={post.likeCount} key={post.id} />
  ));
  let newPostElement = createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className="my_posts">
      <h3>My Posts</h3>
      <div className="new_post">
        <p>New Post</p>
        <div className={style.post_input}>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
            name="post"
            id="post"
            cols="30"
            rows="3"
          />
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
