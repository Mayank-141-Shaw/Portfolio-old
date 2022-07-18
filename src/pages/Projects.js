import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Projects.css'

import bigImg from '../assets/images/chill.jpg'
import ProjectDetailBox from '../components/ProjectDetailBox/ProjectDetailBox'

import foodImg from '../assets/images/projects/gamba-food.png'
import flightImg from '../assets/images/projects/flight-landing.png'

const data = [
  {
    dir: "right",
    img: foodImg,
    title: "Gamba Restaurant",
    badges: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: "A sample for a demo website for an African Restaurant The Gamba Restaurant\n "+ 
          "It worked out as a sample pet project for practising but turned out to be pretty"+
          "good, and liked by many of my associates and friends.",
    link: 'https://github.com/Mayank-141-Shaw/Gamba-Restaurant-Website'
  },
  {
    dir: "left",
    img: flightImg,
    title: "The GEM Logistics",
    badges: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: "A website design for sample of a airplane and logistics company The GEM\n"+
          "Another mini project that I worked on for improving my skills and understanding"+
          " the base of the front of the website. This provides a full UI of the logistics "+
          "company and how it makes it efficient for it to attract clients and trust.",
    link: 'https://github.com/Mayank-141-Shaw/The-Gem-Flight-Website'
  },
  {
    dir: "right",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/Mayank-141-Shaw/Portfolio'
  },
  {
    dir: "left",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/joeldesante/Harvey/blob/master/src/lib/courseChannels.js'
  },
  {
    dir: "right",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/Mayank-141-Shaw/Portfolio'
  },
  {
    dir: "left",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/joeldesante/Harvey/blob/master/src/lib/courseChannels.js'
  },
  {
    dir: "right",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/Mayank-141-Shaw/Portfolio'
  },
  {
    dir: "left",
    img: bigImg,
    title: "Hello World",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
    desc: "theis is the description of the body of the project",
    link: 'https://github.com/joeldesante/Harvey/blob/master/src/lib/courseChannels.js'
  },
]


function Projects() {

  return (
    <>
      <Container className='text-white'>
        <Row className='text-center'>
          <h1 className='mt-5'>Projects</h1>
          <h5>A brief history of my works and achievements</h5>
        </Row>

        <Container>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <Badge
              style={{ display: 'block', width: 'fit-content' }}
              className='year-end'>
              2022
            </Badge>
            <hr style={{ display: 'block', width: '100%', backgroundColor: '#ffffff66' }} />
          </div>

          <ProjectDetailBox info={data[0]} />
          <ProjectDetailBox info={data[1]} />
          <ProjectDetailBox info={data[2]} />
          <ProjectDetailBox info={data[3]} />
          <ProjectDetailBox info={data[4]} />
          <ProjectDetailBox info={data[5]} />
          <ProjectDetailBox info={data[6]} />
          <ProjectDetailBox info={data[7]} />

        </Container>

      </Container>
    </>
  )
}

export default Projects