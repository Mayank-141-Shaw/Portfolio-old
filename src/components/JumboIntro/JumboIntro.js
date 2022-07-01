import React from 'react'
import { Container } from 'react-bootstrap'
import Typed from 'react-typed-v2'
import './JumboIntro.css'

function JumboIntro() {
  return (
    <Container style={{margin:'auto 0'}}>
    <h1>Hi, <br/>
    I am Mayank,
    <br />
    <Typed
            strings={["a Full Stack Developer",
                "a Passionate Creator", 
                "a Video Game Enthusiast",
                "a Problem Solver",
                "a Freelance 3D and XR creator"]}
            typeSpeed={150}
            backSpeed={100} loop/>
    </h1>
    </Container>
  )
}

export default JumboIntro