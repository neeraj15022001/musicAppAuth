import React from "react";
import Form from "../common/Form/Form";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../resources/min-1.png";
import stars from "../../resources/min-1-stars.png";

function Signup() {
  return (
    <div>
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
                confirmPasswordEnabled={true}
                isRegistering={true}
                title="Register"
                buttonTitle="Sign Up"
              />
            </Col>
            <Col
              xs={5}
              sm={5}
              className="d-flex align-items-center justify-content-end position-relative"
            >
              <Image className="m-0 p-0 z-2" src={image} alt="image" width="100%" />
              <Image className="m-0 p-0 z-1 position-absolute top-0 end-0 bottom-0 start-0" src={stars} alt="image" width="100%" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Signup;
