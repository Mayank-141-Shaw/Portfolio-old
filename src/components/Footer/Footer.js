import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer style={{backgroundColor:'black', color:'white', textAlign:'center', padding:'5rem 0'}}>
        <Container>
            <Row>
                <span style={{opacity:'0.6'}}>
                    MAYANK KUMAR SHAW <span style={{color:'rgb(226, 42, 9)'}}>© 2022</span>
                </span>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer