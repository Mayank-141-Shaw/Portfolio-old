import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Skills.css'
import SkillContainer from '../components/SkillContainer/SkillContainer'


function Skills() {
  return (
    <>
      <Container className='text-white'>
        <Row className='py-5 text-center'>
          <h1>What I Do</h1>
          <h5>I am from India. I have completed my Bachelor's in Software Engineering and currently I am pursuing my
            Master's degree starting 2022. I am a full stack developer and currently working as a freelancer.
          </h5>
        </Row>

        <SkillContainer />
      </Container>
    </>
  )
}

export default Skills