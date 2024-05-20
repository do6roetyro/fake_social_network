import React from "react";
import style from './ProfileInfo.module.css';
import ProfilePersonalDataItem from "./ProfilePersonalDataItem/ProfilePersonalDataItem";

const ProfileInfo = (props) => {
  // const personalInfos = [
  //   { id: 1, personalinfo: "Date of Birth: 21 march" },
  //   { id: 2, personalinfo: "City: SPB" },
  //   { id: 3, personalinfo: "Education: MGTU'16" },
  //   { id: 4, personalinfo: "Web Site: https://it-cool.com" },
  // ]

  const personalInfoElement = props.personalInfos.map((info => <ProfilePersonalDataItem personalData={info.personalinfo} key={info.id} />))

  return (
    <>
      <div className={style.header}>
        <img className={style.image} src='https://htmlbook.ru/files/images/layout2/6-05.png'></img>
      </div>
      <div className={style.content}>
        <img className={style.avatar} src='https://i.pinimg.com/236x/ed/94/cb/ed94cbea986e07e2d4c6d11fb614ceb9.jpg'></img>
        <div className={style.container}>
          <p className={style.user_name}>Alexey M.</p>
          <ul className={style.user_list}>
            { personalInfoElement }
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo;