import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Projects.css'

import bigImg from '../assets/images/chill.jpg'
import ProjectDetailBox from '../components/ProjectDetailBox/ProjectDetailBox'

const data = {
  dir: "right",
  img: bigImg,
  title: "Hello World",
  badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
  desc: "theis is the description of the body of the project",
  link: 'https://github.com/Mayank-141-Shaw/Portfolio'
}

const data2 = {
  dir: "left",
  img: bigImg,
  title: "Hello World",
  badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot', 'Three Js', 'Bootstrap', 'Tensorflow', 'Python', 'Ionic'],
  desc: "theis is the description of the body of the project",
  link: 'https://github.com/joeldesante/Harvey/blob/master/src/lib/courseChannels.js'
}



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
            <hr style={{ display: 'block', width: '100%', backgroundColor:'#ffffff66' }} />
          </div>

          <ProjectDetailBox info={data} />
          <ProjectDetailBox info={data2} />


        </Container>

      </Container>
    </>
  )
}

export default Projects