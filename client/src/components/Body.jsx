import React from 'react'
import '../styles/Body.css'
import Video from '../assets/videoplayback.mp4'

function Body() {
  return (
    <div className='body'>
      <video id="video" autoPlay={true} loop muted>
        <source src={Video} type="video/mp4" />
      </video>
        <div className='content'>
            <span style={{fontSize:"22px",padding:"16px 0px 16px 0px"}}> Hey Buddy,</span><span style={{fontSize:"60px",fontWeight:"bold"}}>I'm Manpreet Singh</span> 
             <span style={{fontSize:"22px",padding:"16px 0px 16px 0px"}}>- Blockchain Developer</span>
          </div>
    </div>
  )
}

export default Body