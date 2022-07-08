import React, { useState } from 'react'
import { Image, Row, Modal, Col, Button, ProgressBar, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SkillTab.css'

function SkillTab(props) {

  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <div className='skill-tab' onClick={handleShow}>
        <Row className='skill-tab-img align-items-center' > 
            <Image className='skill-img' src={props.icon} />
        </Row>
        <hr style={{width:props.score+'%', height:'4px'}} />
        <p className='skill-tab-text'>{props.title}</p>
      </div>

      <Modal show={show} onHide={handleClose} centered={true} >
        <Modal.Header closeButton>
            <Modal.Title>{props.title.toUpperCase()}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Row className='align-items-center'>
              <Col md={3} xs={3} lg={3} className='skill-tab-img'>
                <Image src={props.icon} className='skill-img' />
              </Col>
              <Col md={9} xs={9} lg={9} >
                <ProgressBar animated now={props.score} variant={parseInt(props.score) > 75 ? 'danger' : parseInt(props.score) < 40 ? 'info' : 'success'} />
                
                <Badge bg={parseInt(props.score) > 75 ? 'danger' : parseInt(props.score) < 40 ? 'info' : 'success'} 
                  className='rate'>{parseInt(props.score) > 75 ? 'Advanced' : 
                  parseInt(props.score) < 40 ? 'Beginner' : 'Intermediate' }
                </Badge>

                <Badge bg={parseInt(props.score) > 75 ? 'danger' : parseInt(props.score) < 40 ? 'info' : 'success'} 
                  className="exp">Experience : {props.time} years</Badge>
              </Col>
            </Row>
            <Row>
              <p className='desc'>{props.text}</p>
            </Row>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SkillTab