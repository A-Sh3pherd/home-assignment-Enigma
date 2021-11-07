import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Socket from "./pages/Socket";

//


function App() {

    return (
        <Routes>
            <Route path='/socket' element={ <Socket/> }/>
            <Route path='/' element={ <Home/> }/>
        </Routes>
    );
}

export default App;