import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ErrorLabel from "../errorLabel/errorLabel";
import AuthAction from "./redux/auth.action";
import LocalStorageService from "../../services/localStorage.service";

const Auth = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const authToken = useSelector((state) => state.authDetails.token);

  const onSubmit = useCallback((data) => {
    console.log(data);
    dispatch(AuthAction.login(data));
  }, []);

  useEffect(() => {
    if (authToken) {
      LocalStorageService.setAuthToken(authToken);
      history.push("/chat");
    }
    console.log(props);
  }, [authToken]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register({
                    required: true,
                    pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <ErrorLabel message="Please enter your email" />
                )}
                {errors?.email?.type === "pattern" && (
                  <ErrorLabel message="Please enter valid email" />
                )}
              </FormGroup>
              <FormGroup>
                <Button type="submit" variant="success">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
