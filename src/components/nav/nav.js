import React from 'react'
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";


// (
//   import { AiOutlineUser } from "react-icons/ai";

//   <a href="#about">
//         <AiOutlineUser className="icon" />
//       </a>
// )

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>

      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      
      <a href="#members">
        <AiOutlineFundProjectionScreen className="icon" />
      </a>
      
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}


export default Navbar;

