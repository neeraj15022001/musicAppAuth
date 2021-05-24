import React,{useContext} from "react";
import Form from "../common/Form/Form";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../resources/min-2.png";
import stars from "../../resources/min-1-stars.png";
import {UserContext} from "../../controller/UserContext/UserContext"

function Login() {
  const [registered, changeUser] = useContext(UserContext)
  const changeState = () => {
    changeUser(registered => !registered)
  }
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
              changeState={changeState}
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
  );
}

export default Login;
