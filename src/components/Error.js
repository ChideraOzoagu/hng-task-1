import React from 'react'
import { Link, Router } from 'react-router-dom'
// import zuriLogo from "../assets/Zuri.Internship_Logo.png";
// import ingressive from "../assets/I4G.png";

const Error = () => {
  return (
    <div className='error-page'>
      <div className="height">
          <p className='error404'>404 error</p>
          <p className='lg-text'>We can't find that page</p>
          <p className='normal-text'>Sorry the page you're looking for doesn't exist or has been moved.</p>
          <div className="flex-1">
              <Link to='/' className='home-btn'>
                Take me home
              </Link>
              <Link to='/' className='back-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
                Go back
              </Link>
          </div>
      </div>
      
    </div>
  )
}

export default Error
