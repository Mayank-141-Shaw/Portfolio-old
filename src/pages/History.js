import React from 'react'
import { Badge, Button, Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/History.css'

import { BsGithub } from 'react-icons/bs'

import neosoftImg from '../assets/images/neosoft.jpg'
import ebrainImg from '../assets/images/ebrain.jpg'
import sambhramImg from '../assets/images/sambhram.jpg'
import sxiImg from '../assets/images/sxi.jpg'

import ProjectDetailBox from '../components/ProjectDetailBox/ProjectDetailBox'


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
                  <Image className='big-img' src={neosoftImg}/>
                </Col>
                <Col md={6} style={{textAlign:'right'}}>
                  <h3>NeoSoft Technologies</h3>
                  <Badge className='year'>2021</Badge>
                  <Badge className='year'>2022</Badge>
                  <p>Company where I joined as a full time Full Stack Developer</p>
                </Col>
              </Row>

              <Row className='my-5 align-items-center'>
                <Col md={6} style={{textAlign:'left'}}>
                  <h3>E-Brain Softech Pvt Ltd</h3>
                  <Badge className='year'>2020</Badge>
                  <p>Company where I joined as a Machine Learning Intern.</p>
                </Col>
                <Col className='left-rotated' md={6}>
                  <Image className='big-img' src={ebrainImg}/>
                </Col>
              </Row>

              <Row className='my-5 align-items-center'>
                <Col className='right-rotated' md={6}>
                  <Image className='big-img' src={sambhramImg}/>
                </Col>
                <Col md={6} style={{textAlign:'right'}}>
                  <h3>Sambhram Institute of Technology</h3>
                  <Badge className='year'>2018</Badge>
                  <Badge className='year'>2019</Badge>
                  <Badge className='year'>2020</Badge>
                  <Badge className='year'>2021</Badge>               
                  <p>My college where I pursued my Bachelor's of Engineering
                      in Computer Science and Engineering ( BE CSE )
                  </p>
                </Col>
              </Row>

              <Row className='my-5 align-items-center'>
                <Col md={6} style={{textAlign:'left'}}>
                  <h3>St. Xavier's Institution ( XII )</h3>
                  <Badge className='year-start'>2015</Badge>
                  <Badge className='year-start'>2015</Badge>
                  <Badge className='year-end'>2017</Badge>
                  <p>My school where I completed my higher secondary in Science Stream</p>
                </Col>
                <Col className='left-rotated' md={6}>
                  <Image className='big-img' src={sxiImg}/>
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