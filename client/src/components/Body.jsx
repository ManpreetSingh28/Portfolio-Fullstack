import React from 'react'
import '../styles/Body.css'
import Video from '../assets/bvideo.mp4'

function Body() {
  return (
    <div className="body">
      <video id="video" autoPlay={true} loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content">
        <span
          style={{
            fontSize: '30px',
            padding: '16px 0px 16px 0px',
            fontWeight: '800',
          }}
        >
          {' '}
          Howdy,
        </span>
        <span style={{ fontSize: '60px', fontWeight: '800' }}>
          I'm Manpreet Singh
        </span>
        <span
          style={{
            fontSize: '30px',
            padding: '16px 0px 16px 0px',
            fontStyle: 'italic',
            fontWeight: '800',
          }}
        >
          Blockchain Developer
        </span>
      </div>
    </div>
  )
}

export default Body
