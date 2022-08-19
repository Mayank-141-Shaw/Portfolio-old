import React, { useState } from 'react'
import { Button, Image, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Viewer(props) {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const toggleHover = () => setHover(!hover);

  return (
    <>
        <Image className='my-3' src={props.src} width={'100%'} onClick={handleShow} 
            onMouseEnter={toggleHover} onMouseLeave={toggleHover}/>

        <Modal show={show} onHide={handleClose} size={'lg'}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Image src={props.src} width={'100%'}/>
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

export default Viewer