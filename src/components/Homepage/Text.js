import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Special Educator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text