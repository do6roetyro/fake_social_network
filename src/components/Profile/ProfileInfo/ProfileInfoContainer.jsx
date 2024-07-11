import React from "react";
import ProfileInfo from "./ProfileInfo";
import StoreContext from "../../../storeContext";

const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return <ProfileInfo ProfileInfos={state.profilePage.personalInfos} />;
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileInfoContainer;
