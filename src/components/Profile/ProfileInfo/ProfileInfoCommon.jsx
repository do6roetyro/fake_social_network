import style from "./ProfileInfo.module.css";

const ProfileInfoCommon = (props) => {

    return (
        <div className={style.container}>
            <p className={style.user_name}>{props.profile.fullName}</p>
            <p className={style.about}>{props.profile.aboutMe}</p>
            <p className={style.about}>
                {`Looking for a job : ${props.profile.lookingForAJob ? 'Yes' : 'No'}`}
            </p>
            <p className={style.about}>{props.profile.lookingForAJobDescription}</p>
        </div>
    );
};

export default ProfileInfoCommon;
