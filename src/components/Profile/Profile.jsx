import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <div className={style.main_container}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
