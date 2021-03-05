import React, { useEffect, useMemo, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Col } from "react-bootstrap";

import UsersAction from "./redux/users.action";
import AppContext from "../../../app.context";
import User from "./user/User";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const testContext = useContext(AppContext);

  const usersList = useMemo(() => {
    return users.map((user, index) => (
      <User user={user} key={index} index={index} />
    ));
  }, [users]);

  useEffect(() => {
    dispatch(UsersAction.getUsers());
  }, []);

  useEffect(() => console.log("testContext", testContext), [testContext]);

  return (
    <>
      <Col lg={4} md={4} sm={12} xs={12}>
        <ListGroup>{usersList}</ListGroup>
      </Col>
    </>
  );
};

export default Users;
