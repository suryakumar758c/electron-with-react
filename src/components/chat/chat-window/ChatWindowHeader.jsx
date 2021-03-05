import React from "react";

import NoUserImage from "../../../static/images/no-user.png";

import "../users/user/user.styles.scss";

const ChatWindowHeader = ({ user = {} }) => {
  return (
    <>
      <div>
        <span>
          <img className="user-chat-profile-img" src={NoUserImage} alt="user" />
        </span>
        {`  `}
        <span>{user.email || "unknown"}</span>
      </div>
    </>
  );
};

export default ChatWindowHeader;
