import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import NavBar from "./pages/NavBar";
import LogOut from "./pages/LogOut";
import About from "./pages/About";
import Faculty from "./pages/Faculty"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import Cse from "./components/Faculty/department/Cse";
import Ce from "./components/Faculty/department/Ce";
import Ee from "./components/Faculty/department/Ee";
import Prof from "./components/Faculty/Prof";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="LogOut" element={<LogOut />} />
          <Route path="Login" element={<Login />} />
          <Route path="About" element={<About />} />

          <Route path="Register" element={<Register />} />

          <Route path="Faculty" element={<Faculty />}>

          <Route path="Cse" element={<Cse />} />
          <Route path="Ee" element={<Ee />} />
          <Route path="Ce" element={<Ce />} />

           </Route>
          <Route path="ContactUs" element={<ContactUs />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;