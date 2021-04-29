import React from "react";

const ProfileIcon = ({ user }) => {
    const profile_icon_violet = require('../frontend-assets/profile_icon_violet.png');
    
    let userInitial;
    if (user) userInitial = user.username[0].toUpperCase()
    
    return (
        <div className="profile-icon-container">
            <img className="profile-icon-bg" src={profile_icon_violet}></img>
            <div title={`${user.username}`} className="profile-initial flex-container">{userInitial}</div>
        </div>
    );
};

export default ProfileIcon;