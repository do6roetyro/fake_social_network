import React, { createRef } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.postMessage} likeCount={post.likeCount} key={post.id} />
  ));
  let newPostElement = createRef();

  let onAddPost = () => {
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
        <div className={style.input}>
          <textarea
            className={style.textarea}
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
            name="post"
            id="post"
            cols="30"
            rows="3"
          />
          <button className={style.button} onClick={onAddPost}>
            add post
          </button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;