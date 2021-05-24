import React from "react";
import Form from "../common/Form/Form";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../resources/min-2.png";

function Login() {
  return (
    <div className="full-page-spread bg-themeBg d-flex align-items-center justify-content-center">
      <Container fluid>
        <Row>
          <Col
            xs={7}
            sm={7}
            className="d-flex align-items-center justify-content-center"
          >
            <Form
              cardClass="w-75 bg-transparent"
              confirmPasswordEnabled={false}
              isRegistering={false}
              title="Login"
              buttonTitle="Sign In"
            />
          </Col>
          <Col
            xs={5}
            sm={5}
            className="d-flex align-items-center justify-content-end"
          >
            <Image className="m-0 p-0" src={image} alt="image" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
