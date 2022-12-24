import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/NavBar";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BantuTemanPage from "./pages/BantuTemanPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div>Halo, selamat datang di website temanNogind.</div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/bantu" element={<BantuTemanPage />} />
            </Routes>
        </div>
    );
}

export default App;
