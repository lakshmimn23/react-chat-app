import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/default/Home";
import Register from "./component/auth/Register";
import Pnf from "./component/default/Pnf";
import LoginPage from "./component/auth/LoginPage";

function App(props) {
  return(
    <BrowserRouter>
        <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/login`} element= {<LoginPage/>} />
            <Route path={`/register`} element={<Register/>} />
            <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App