import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    history.replace("/school-search");
  };

  return (
    <div className="login">
      <Container>
        <div className="d-flex justify-content-center">
          <Form
            id="loginForm"
            className="col-12 col-md-8 col-lg-4 login-form"
            onSubmit={formSubmitHandler}
          >
            <div className="d-flex justify-content-center">
              <p style={{ color: "#1F2A55" }} className="fs-4 fw-bold">
                Login
              </p>
            </div>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Username"
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-between">
              <Form.Group controlId="remember">
                <Form.Check type="checkbox" isValid label="Remember Me" />
              </Form.Group>

              <p className="forgot">Forgot Password ?</p>
            </div>

            <Button className="my-3 col-12" variant="success" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>

      <footer className="footer ">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <p className="sepration">Disclaimer</p>
            <p className="sepration">Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>© Copyright 2022</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Login;
