import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={style.item}>
      <img
        className={style.avatar}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM4EnHk1NfPfjqNVHRtYtcct7O8pP1-Mw_w&s"
        alt=""
      />
      {props.message}
      <div className="like">
        <span>like - {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
