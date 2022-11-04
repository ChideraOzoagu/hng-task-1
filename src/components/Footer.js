import React from 'react'
import zuriLogo from "../assets/Zuri.Internship_Logo.png";
import ingressive from "../assets/I4G.png";

const Footer = () => {
  return (
    <>
    <footer>
        <img src={zuriLogo} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="ingressive for good" />
      </footer>
    </>
  )
}

export default Footer
