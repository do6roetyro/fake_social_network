import style from "./ProfileInfo.module.css";
import ProfileInfoCommon from "./ProfileInfoCommon";
import UsersPreloader from "../../Common/Preloaders/UsersPreloader";
import ProfileInfoContacts from "./ProfileInfoContacts";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <UsersPreloader />
  }
  return (
    <>
      <div className={style.content}>
        <img
          className={style.avatar}
          src={props.profile.photos.large}
        ></img>
        <div className={style.info}>
        <ProfileInfoCommon profile={props.profile} />
        <ProfileInfoContacts contacts={props.profile.contacts}/>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
