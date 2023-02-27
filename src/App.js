import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarAuth from "./Components/NavbarAuth/NavbarAuth";
import LandingPage from "./Page/LandingPage";
import UbahPassword from "./Components/NavbarAuth/Menu/UbahPassword";
import Profile from "./Components/NavbarAuth/Menu/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("refresh") || localStorage.getItem("access")) {
      setIsLogin(!isLogin);
    }
  }, []);
  return (
    <div className="App">
      {isLogin ? (
        <NavbarAuth isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      )}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/Profile Saya" element={<Profile />} />
          <Route path="/Ubah Password" element={<UbahPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
