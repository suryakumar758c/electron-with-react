import React from "react";
import { Container, Row } from "react-bootstrap";
import Users from "./users/Users";
import ChatWindow from "./chat-window/ChatWindow";

const Chat = () => {
  return (
    <>
      <Container>
        <Row>
          <Users />
          <ChatWindow />
        </Row>
      </Container>
    </>
  );
};

export default Chat;
