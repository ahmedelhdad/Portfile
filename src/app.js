import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import './style.css'
import Home from "./components/home/home";
import Contact from "./components/contact/contact";

import Members from "./components/members/members";
import Footer from "./components/footer/footer";

function App()  {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar/>
      <Home/>
      <Contact/>
      <Members/>
      <Footer/>
    </>
  );
}
export default App;
