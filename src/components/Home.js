import React from 'react'
import avatar from "../assets/avatar.png";
import mobileMenu from "../assets/mobile-menu.png";
import slack from "../assets/slack.png";
import github from "../assets/Social icon.png";
import zuriLogo from "../assets/Zuri.Internship_Logo.png";
import ingressive from "../assets/I4G.png";
import shareBtn from "../assets/share-btn.png";
import camera from '../assets/camera-Icon.png'
import myAvatar from '../assets/myAvatar.jpg'


const Home = () => {
  return (
    <main className="main">
      <div className="avatar">
        <div className="img-container">
          <img src={myAvatar} alt="profile picture" id="profile__img" />
          <div className="overlay">
            <img src={camera} alt="camera icon" className="camera" />
          </div>
        </div>
        <img src={mobileMenu} alt="menu" className="menu" />
        <img src={shareBtn} alt="share button" className="share-btn" />
      </div>
      <div className="profile">
        <h2 id="twitter">notchidera</h2>
        <h2 id="slack">Chidox</h2>
      </div>
      <button id="twitter__link">
        <a href="https://twitter.com/notchidera" target="_blank">
          Twitter Link
        </a>
      </button>
      <button id="btn__zuri">
        <a href="https://training.zuri.team/" target="_blank">
          Zuri Team
        </a>
      </button>
      <button id="books">
        <a href="https://books.zuri.team" target="_blank">
          Zuri Books
        </a>
      </button>
      <button id="book__python">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Chidox" target="_blank">
          Python Books
        </a>
      </button>
      <button id="pitch">
        <a href="https://background.zuri.team" target="_blank">
          Background Check for Coders
        </a>
      </button>
      <button id="book__design">
        <a href="https://books.zuri.team/design-rules" target="_blank">
          Design Books
        </a>
      </button>
      <div className="icons">
        <a href="https://slack.com" target="_blank">
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/chideraozoagu" target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>
      <footer>
        <img src={zuriLogo} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="ingressive for good" />
      </footer>
    </main>
  )
}

export default Home
