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
        <Row>
          <h1 className='mt-5'>Timeline</h1>
          <h5>A brief history of my works and achievements</h5>
        </Row>
        
        <Container>
          <Badge className='year'>2022</Badge>
          
          <Row>
            <Col md={12} xs={12} lg={12}>
              <ProjectDetailBox info={data} />

              <Row className='my-5 align-items-center'>
                <Col className='right-rotated' md={6}>
                  <Image className='big-img' src={bigImg}/>
                </Col>
                <Col md={6}>
                  <h3>Title</h3>
                  <div>
                    <Badge>HTML</Badge>
                    <Badge>HTML</Badge>
                    
                  </div>
                  <p>Lorem34dsd dsds jndbdsd dbushds dsdsu</p>
                  <Button style={{width:'fit-content'}} size='sm'><BsGithub/> Github</Button>
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