import React,{createContext, useState} from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [registered, changeUser] = useState(false)
    return (
        <UserContext.Provider value={[registered, changeUser]}>
            {props.children}
        </UserContext.Provider>
    )
}