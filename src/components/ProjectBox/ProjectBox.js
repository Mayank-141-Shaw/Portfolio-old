import React, { useState } from 'react'
import './ProjectBox.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Image, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProjectBox(props) {

    const [toggleViewProjectBtn, setViewBtn] = useState(false)
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const toggleHoverViewButton = () => {
        setViewBtn(!toggleViewProjectBtn);
      }
    

  return (
    <>
        <div className='project-card' style={{
            aspectRatio:'1', 
            backgroundImage:`url(${props.img})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
                onMouseEnter={toggleHoverViewButton} onMouseLeave={toggleHoverViewButton}>
               
            <div className={`hover-round ${toggleViewProjectBtn ? 'show-hover' : 'hide-hover'}`} onClick={handleShow}>
                View Project
            </div>
        </div>

        <Modal show={show} onHide={handleClose} size={'lg'}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Image src={props.img} width={'100%'}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">
                    <Link to='/project' style={{textDecoration:'none', color:'white', fontWeight:'400'}}>
                        Goto Projects
                    </Link>
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default ProjectBox