import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
const Profile = () => {
  return (
    <div className="profile-container">
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>

            <div className='colz-icon'>



            
            <a href="https://www.facebook.com/rahulsingh.arya.71">
              <i className='fa fa-facebook-square'></i>
            </a>

            <a href="">
              <i className='fa fa-google-plus-square'></i>
            </a>

            <a href="https://www.instagram.com/rahulsingh47_/">
              <i className='fa fa-instagram'></i>
            </a>

            <a href="">
              <i className='fa fa-youtube-square'></i>
            </a>


            <a href="https://twitter.com/Rahulsingh00116">
              <i className='fa fa-twitter'></i>
            </a>


 
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-details-text'>
                {""}Hello, I'm
                <span className='highlighted-text'> Rahul Singh</span>
            </span>
          </div>
          <div>
            <span className='primary-text'>
                 {""}
            <h1 className='r'>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                    "Ethusiastic Dev ❤️",
                    1000,

                    "Full Stack Developer 👨🏻‍💻",
                    1000,

                    "Mern Stack Dev 🌐 ",
                    1000,
                    "Cross Platform v ⚛ ",
                    1000,
                    "React/React Native Dev ⚛️",
                    1000,
                ]}
                />
            </h1>
            <span>Knack of building application with frontend and backend operations</span>
            </span>
          </div>

        </div>
        <div className='profile-options'>
            <button className='btn primary-btn'>
                {""}
                Hire Me{""}
            </button>
            <a href="RAHUL.pdf" download='Rahul Singh RAHUL.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
        </div>
      </div>
      <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
      </div>
    </div>
  )
}

export default Profile