import React from "react";
import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className="header">
        <img className="image" src='https://htmlbook.ru/files/images/layout2/6-05.png'></img>
      </div>
      <div className={style.content}>
        <img className="avatar" src='https://i.pinimg.com/236x/ed/94/cb/ed94cbea986e07e2d4c6d11fb614ceb9.jpg'></img>
        <div className="user_container">
          <p className="user_name">Alexey M.</p>
          <ul className="user_info_list">
            <li className="user_info_item">Date of Birth: 21 march</li>
            <li className="user_info_item">City: SPB</li>
            <li className="user_info_item">Education: MGTU'16</li>
            <li className="user_info_item">Web Site: https://it-cool.com</li>
          </ul>
        </div>
      </div>
      <div className="my_posts">
        My Posts
        <div className="new_post">
          New Post
        </div>
        <div className="other_posts">
          Post-1
        </div>
        <div className="other_posts">
          Post-2
        </div>
      </div>
    </div>
  )
}

export default Profile;