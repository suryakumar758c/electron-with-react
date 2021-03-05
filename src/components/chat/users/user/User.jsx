import React from "react";
import { ListGroupItem } from "react-bootstrap";

import NoUserImage from "../../../../static/images/no-user.png";
import "./user.styles.scss";

const User = ({ index, user, ...props }) => {
  return (
    <>
      <ListGroupItem key={index}>
        <span>
          <img className="user-chat-profile-img" src={NoUserImage} />
        </span>
        {`  `}
        <span>{user.email}</span>
      </ListGroupItem>
    </>
  );
};

export default User;
