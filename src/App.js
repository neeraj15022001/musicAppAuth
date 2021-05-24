import React from "react";
import "./App.css";
import MiddleWare from "./MiddleWare"
import {UserProvider} from "./controller/UserContext/UserContext"

function App() {
  const isRegistered = true;
  return (
    <div>
      <UserProvider>
        <MiddleWare />
      </UserProvider>
    </div>
  );
}

export default App;
