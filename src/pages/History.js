import React from 'react'
import { Badge, Button, Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/History.css'

import { BsGithub } from 'react-icons/bs'

import bigImg from '../assets/images/chill.jpg'
import ProjectDetailBox from '../components/ProjectDetailBox/ProjectDetailBox'

const data = {
  dir: "right",
  img: bigImg,
  title: "Hello World",
  badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Spring Boot'],
  desc: "theis is the description of the body of the project"
}

function History() {
  
  return (
    <>
      <Container className='text-white'>
        <Row className="text-center">
          <h1 className='mt-5'>Timeline</h1>
          <h5>A brief history of my works and achievements</h5>
        </Row>
        
        <Container>
          <Row>
            <Col md={12} xs={12} lg={12}>
              
              <Row className='my-5 align-items-center'>
                <Col className='right-rotated' md={6}>
                  <Image className='big-img' src={bigImg}/>
                </Col>
                <Col md={6} style={{textAlign:'right'}}>
                  <h3>NeoSoft Technologies</h3>
                  <Badge className='year'>2021</Badge>
                  <Badge className='year'>2022</Badge>
                  <p>Company where I joined as a full time Full Stack Developer</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        
      </Container>
    </>
  )
}

export default History