import React from "react";
import style from './ProfilePersonalDataItem.module.css'

const ProfilePersonalDataItem = (props) => {
  return (
    <li className={style.user_item}>{props.personalData}</li>
  )
}

export default ProfilePersonalDataItem;