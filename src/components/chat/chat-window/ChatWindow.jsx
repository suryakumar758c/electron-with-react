import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import ChatWindowFooter from "./ChatWindowFooter";

import "./chatWindow.styles.scss";

const ChatWindow = () => {
  return (
    <>
      <Col lg={8} md={8} sm={12} xs={12}>
        <ListGroup>
          <ListGroupItem>
            <ChatWindowHeader />
          </ListGroupItem>
          <ListGroupItem>
            <ChatWindowBody />
          </ListGroupItem>
          <ListGroupItem>
            <ChatWindowFooter />
          </ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};

export default ChatWindow;
