import React from 'react'
import { Badge, Button, Col, Image, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProjectDetailBox.css'

import { BsGithub } from 'react-icons/bs'


const colors = ['red', 'purple', 'green', 'orange', 'black', 'blue']


function ProjectDetailBox(props) {

    
    const randomColor = () => {
        let cc = colors[Math.floor(Math.random()*6)]+'!important'
        
        console.log(cc)
        return cc
    }   

    return (
    <Row className='my-5 align-items-center'>
        {
            props.info.dir == 'left' ? 
            <>
                <Col className={props.info.dir == 'right' ? 'left-rotated' : 'right-rotated'} md={6}>
                    <Image className='big-img' src={props.info.img}/>
                </Col>
                <Col md={6}>
                    <h3>{props.info.title}</h3>
                    <div>
                        {props.info.badges.map( badge => {
                            return <Badge style={{backgroundColor:randomColor()}} >{badge}</Badge>
                        })}
                    </div>
                    <p>{props.info.desc}</p>
                    <Button style={{width:'fit-content'}} size='sm'><BsGithub/> Github</Button>
                </Col>
            </> 
            : 
            <>
                <Col md={6}>
                    <h3>{props.info.title}</h3>
                    <div>
                        {props.info.badges.map( badge => {
                            return <Badge style={{backgroundColor:randomColor()}}>{badge}</Badge>
                        })}
                    </div>
                    <p>{props.info.desc}</p>
                    <Button style={{width:'fit-content'}} size='sm'><BsGithub/> Github</Button>
                </Col>
                <Col className={props.info.dir == 'right' ? 'left-rotated' : 'right-rotated'} md={6}>
                    <Image className='big-img' src={props.info.img}/>
                </Col>
            </>
        }
    </Row>
  )
}

export default ProjectDetailBox