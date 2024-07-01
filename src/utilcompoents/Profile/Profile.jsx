import React from "react";
import "./Profile.css";
import { BiSolidEdit } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
const Profile = ({ toggle, isOpen }) => {
  return (
    <div className={`profile-card ${!isOpen && "remove-border"}`}>
      {isOpen && (
        <>
          <img src="/images/profile-.png" alt="profile-pic" />
          <div className="profile-name-card">
            <h3>Vamsi</h3>
            <span>Full Stack</span>
          </div>
          <BiSolidEdit size={22} className="profile-edit-icons" />
        </>
      )}
      <RxHamburgerMenu onClick={toggle} className="profile-ham-icons" />
    </div>
  );
};

export default Profile;
