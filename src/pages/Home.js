import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import JumboIntro from '../components/JumboIntro/JumboIntro'
import { BsChevronDoubleDown, BsLightbulbFill } from 'react-icons/bs'
import { BiTachometer } from 'react-icons/bi'
import { MdDevices } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import Typed from 'react-typed-v2'
import './css/Home.css'
import ProjectBox from '../components/ProjectBox/ProjectBox'


function Home() {

  

  const scrollDown = () => {
    let about = document.getElementById('about-tag').getBoundingClientRect();
    window.scrollTo(about.x, about.y);
  }

  return (
    <div style={{zIndex:'2'}}>
      <Container fluid style={{backgroundColor:'red', height:'100vh', display:'flex',
          flexDirection:'column', alignItems:'center'}}>
        <Container className="text-zone my-auto " >
          <JumboIntro />
          <Row  className='justify-content-around' style={{transform: 'translateY(20vh)'}}>
            <Col md={1} lg={1} sm={1} xs={1} className='justify-content-center'>
            <Button className='scrollBtn' onClick={scrollDown}>
              <BsChevronDoubleDown />
            </Button>
            </Col>
          </Row>
        </Container>
      </Container>


      <Container id='about-tag'>
        <Row style={{textAlign:'center', margin:'4rem 0'}}>
          <Typed className='big-head'
            strings={["About Me", "About Myself"]}
            typeSpeed={150}
            backSpeed={100} loop/>
        </Row>
        <Row>
          <Col md={6} lg={6} xl={6} style={{
            fontWeight:'700', fontSize:'1rem', textAlign:'center'
          }}>
            I am a Full Stack Developer located in India. I have a passion for creating 
            full stack projects and solutions that can provide dynamic user experience and 
            solve great challenges.<br/><br/>

            Well organized guy, problem-solver, student and freelancer
            with high attention to detail.<br/><br/>
              
            <span style={{fontSize:'1.5rem'}}>Fan of <Typed
            style={{backgroundColor:'green', color:'white', borderRadius:'5px', padding:'0 5px'}}
            strings={["Video Games", 
                "Outdoor Activities", 
                "Sci-Fi Movies", 
                "Books", 
                "Technology"]}
            typeSpeed={150}
            backSpeed={100} loop/> <br/><br/>
            </span>

            Interested in the entire full stack spectrum (both front and backend)
            and working on ambitious projects with positive people.
          </Col>
          <Col md={6} lg={6} xl={6}>
            Rotating globe of skills tree
          </Col>
          
        </Row>

        <Row className="justify-content-around text-center" style={{margin:'5rem 0'}}>
          <Col md={3} lg={3} xs={6}>
            <div className='round-box'>
              <BiTachometer className='icon' size={'6vw'} color={'white'}/>
            </div>
            
            <h3 className='round-box-h3'>Fast</h3>
            <p className='round-box-text'>Fast load times and lag free interaction</p>
          </Col>
          <Col md={3} lg={3} xs={6}>
            <div className='round-box'>
              <BsLightbulbFill className='icon' size={'6vw'} color={'white'}/>
            </div>
            <h3 className='round-box-h3'>Responsive</h3>
            <p className='round-box-text'>My layouts will work on any device, big or small</p>
          </Col>
          <Col md={3} lg={3} xs={6}>
            <div className='round-box'>
              <MdDevices className='icon' size={'6vw'} color={'white'}/>
            </div>
            <h3 className='round-box-h3'>Intuitive</h3>
            <p className='round-box-text'>Strong preference for easy to use, intuitive UX/UI</p>
          </Col>
          <Col md={3} lg={3} xs={6}>
            <div className='round-box'>
              <IoIosRocket className='icon' size={'6vw'} color={'white'}/>
            </div>
            <h3 className='round-box-h3'>Dynamic</h3>
            <p className='round-box-text'>Websites don't have to be static, I love making pages come to life</p>
          </Col>
        </Row>
      </Container>

      <div >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" 
            d="M0,32L34.3,58.7C68.6,85,137,139,206,133.3C274.3,128,343,64,411,80C480,96,549,192,617,202.7C685.7,213,754,139,823,117.3C891.4,96,960,128,1029,149.3C1097.1,171,1166,181,1234,165.3C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
        <Container style={{margin:'5rem auto'}}>
        <Row style={{textAlign:'center', margin:'4rem 0'}}>
          <Typed className='big-head'
            strings={["Projects", "Works"]}
            typeSpeed={150}
            backSpeed={100} loop/>
        </Row>

        <Row className='justify-content-center'>
          <Col md={4} xs={12} lg={4} style={{padding:'0'}}>
            <ProjectBox color='red'/>
          </Col>
          <Col md={4} xs={12} lg={4} style={{padding:'0'}}>
            <ProjectBox color='blue'/>
          </Col>
          <Col md={4} xs={12} lg={4} style={{padding:'0'}}>
            <ProjectBox color='green'/>
          </Col>
          <Col md={4} xs={12} lg={4} style={{padding:'0'}}>
            <ProjectBox color='yellow'/>
          </Col>
          
        </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,320L34.3,314.7C68.6,309,137,299,206,272C274.3,245,343,203,411,181.3C480,160,549,160,617,176C685.7,192,754,224,823,224C891.4,224,960,192,1029,192C1097.1,192,1166,224,1234,234.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
        </svg>
      </div>

      <Container fluid className='mt-5 p-0'>
        <Row style={{textAlign:'center', margin:'4rem 0'}}>
          <Typed className='big-head'
            strings={["Contact Me", "Get In Touch"]}
            typeSpeed={100}
            backSpeed={50} loop/>
        </Row>
        <Row style={{margin:'0'}}>
          <Col md={6} lg={6} xs={12} style={{padding:'2rem 3rem'}}>
            <Row>
              <h2>Contact Form</h2>
            </Row>
            <Row>
              <p>I am interested in freelance oppotunities - especially ambitious or large projects.
                  However, if you have other requests or concerns, don't hesitate to use the form.
              </p>
            </Row>
            <Row>

              <Form style={{marginTop:'3rem'}}>
                <Row>
                  <Col md={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                </Row>
                

                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Control as="textarea" rows={4} placeholder="Message" style={{padding:'10px'}} />
                </Form.Group>
                <Button id="form-btn" variant="success" type="submit">
                  Submit
                </Button>
              </Form>

            </Row>
          </Col>
          <Col md={6} lg={6} xs={12} style={{padding:'0'}}>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471218.3856032584!2d88.0495282352594!3d22.676385755147976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1655479094106!5m2!1sen!2sin" 
              width="100%" height="100%" style={{border:'0'}} allowFullScreen="" loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home