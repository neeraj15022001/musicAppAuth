import React,{useContext} from 'react'
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {UserContext} from "./controller/UserContext/UserContext"

function MiddleWare() {
    const [registered] = useContext(UserContext)
    return (
        <>
            {registered ? <Login /> : <Signup />}
        </>
    )
}

export default MiddleWare
