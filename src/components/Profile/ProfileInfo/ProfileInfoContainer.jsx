import React from "react";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
  let state = props.store.getState();

  return (
    <>
      <ProfileInfo ProfileInfos={state.profilePage.personalInfos} />
    </>
  );
};

export default ProfileInfoContainer;
