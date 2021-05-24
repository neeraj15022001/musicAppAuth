import React from 'react'
import PageHeading from "../PageHeading/PageHeading"
import InputField from "../InputField/InputField"
import Button from "../Button/Button"
import {Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Form({title,buttonTitle,cardClass, confirmPasswordEnabled, isRegistering}) {
    return (
        <Card className={cardClass} body>
            <PageHeading title={title} />
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
            {confirmPasswordEnabled && <InputField type="password" placeholder="Confirm Password" />}
            {!isRegistering && <p className="text-secondary">Forgot Password?</p>}
            <Button buttonTitle={buttonTitle} />
        </Card>
    )
}

export default Form
