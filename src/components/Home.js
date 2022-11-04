import React from 'react'
import mobileMenu from "../assets/mobile-menu.png";
import slack from "../assets/slack.png";
import github from "../assets/Social icon.png";
import shareBtn from "../assets/share-btn.png";
import camera from '../assets/camera-Icon.png'
import myAvatar from '../assets/myAvatar.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer';


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
      <button className='btn' id="twitter__link">
        <a href="https://twitter.com/notchidera" target="_blank">
          Twitter Link
        </a>
      </button>
      <button className='btn' id="btn__zuri">
        <a href="https://training.zuri.team/" target="_blank">
          Zuri Team
        </a>
      </button>
      <button className='btn' id="books">
        <a href="https://books.zuri.team" target="_blank">
          Zuri Books
        </a>
      </button>
      <button className='btn' id="book__python">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Chidox" target="_blank">
          Python Books
        </a>
      </button>
      <button className='btn' id="pitch">
        <a href="https://background.zuri.team" target="_blank">
          Background Check for Coders
        </a>
      </button>
      <button className='btn' id="book__design">
        <a href="https://books.zuri.team/design-rules" target="_blank">
          Design Books
        </a>
      </button>
      <button className='btn' id="contact">
       <Link to='/contact'>
       Contact Me
       </Link>
      </button>
      <div className="icons">
        <a href="https://slack.com" target="_blank">
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/chideraozoagu" target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>
      <Footer/>
      
    </main>
  )
}

export default Home
