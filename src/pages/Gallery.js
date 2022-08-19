import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import vrImage from '../assets/images/gallery/VR pixelguy.png'
import indoorImage from '../assets/images/gallery/Modern_Indoor.png'
import parkImage from '../assets/images/gallery/LowPoly Dark park Bench.png'
import desertImage from '../assets/images/gallery/SpaceDesert.png'
import gardenImage from '../assets/images/gallery/HighQ Garden.png'


import Viewer from '../components/Viewer/Viewer'


function Gallery() {
  return (
    <div style={{zIndex:2}}>
      <Container>
        <Row className={'no-gutters'}>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={vrImage} name='VR headgear model'/>
            <Viewer src={parkImage} name='Dark Park Bench'/>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={gardenImage} name='Lighty Garden'/>
            <Viewer src={indoorImage} name='Moden Indoor'/>
          </Col>
          <Col md={4} lg={4} xs={12}>
            <Viewer src={desertImage} name='Space Desert'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery