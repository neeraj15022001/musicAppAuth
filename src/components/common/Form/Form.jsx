import React from 'react'
import PageHeading from "../PageHeading/PageHeading"
import InputField from "../InputField/InputField"
import Button from "../Button/Button"
import {Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Form({title,buttonTitle,cardClass, confirmPasswordEnabled, isRegistering, changeState}) {
    return (
        <Card className={cardClass} body>
            <PageHeading title={title} />
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
            {confirmPasswordEnabled && <InputField type="password" placeholder="Confirm Password" />}
            {!isRegistering && <p className="text-secondary">Forgot Password?</p>}
            <Button buttonTitle={buttonTitle} />
            <div className="d-flex align-items-center justify-content-center">
            <button onClick={changeState} className="btn btn-outline-light">{isRegistering ? "Already have an account ? Sign In" : "Don't have an account ? Register Now" }</button>
            </div>
        </Card>
    )
}

export default Form
