import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import chillImage from '../assets/images/chill.jpg'
import cloudyImage from '../assets/images/cloudsy.jpg'
import sunsetImage from '../assets/images/sunset.jpg'
import pastelImage from '../assets/images/pastel.jpg'
import colorImage from '../assets/images/color.jpg'
import japanImage from '../assets/images/japan.jpg'
import jarImage from '../assets/images/jar.jpg'
import vrImage from '../assets/images/gallery/VR pixelguy.png'

import Viewer from '../components/Viewer/Viewer'


function Gallery() {
  return (
    <div style={{zIndex:2}}>
      <Container>
        <Row className={'no-gutters'}>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={chillImage} name='Chill'/>
            <Viewer src={pastelImage} name='Pastel'/>
            <Viewer src={jarImage} name='Jar'/>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={cloudyImage} name='Cloudy'/>
            <Viewer src={colorImage} name='Color'/>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={sunsetImage} name='Sunset'/>
            <Viewer src={japanImage} name='Japan'/>
            <Viewer src={vrImage} name='VR headgear model'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery