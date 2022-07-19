import React from 'react'
import { Badge, Button, Col, Image, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProjectDetailBox.css'

import { BsGithub } from 'react-icons/bs'
import { IoLogoWebComponent } from 'react-icons/io5'




function ProjectDetailBox(props) {

    const colors = ['red', 'purple', 'green', 'orange', 'black', 'blue']
    
    const randomColor = () => {
        let cc = colors[Math.floor(Math.random()*6)]+'!important'
        return cc
    }   

    const gotoPage = () => {
        window.open(props.info.link, "_blank")
    }

    const gotoLivePage = () => {
        window.open(props.info.live, "_blank")
    }

    return (
    <Row className='align-items-center' style={{margin:'5rem auto'}}>
        {
            props.info.dir == 'left' ? 
            <>
                <Col className={props.info.dir == 'right' ? 'left-rotated' : 'right-rotated'} md={6}>
                    <Image className='big-img' src={props.info.img}/>
                </Col>
                <Col md={6} style={{textAlign:'right'}}>
                    <h3>{props.info.title}</h3>
                    <div>
                        {props.info.badges.map( badge => {
                            return <Badge style={{backgroundColor:'red!important'}} >{badge}</Badge>
                        })}
                    </div>
                    <p>{props.info.desc}</p>
                    
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'end'}}>
                        <Button style={{marginLeft:'1rem', width:'fit-content', display: props.info.live == 'none' ? 'none' : 'block'}} size='sm' onClick={gotoLivePage}><IoLogoWebComponent/> Live Page</Button>
                        <Button style={{marginLeft:'1rem', width:'fit-content'}} size='sm' onClick={gotoPage}><BsGithub/> Github</Button>
                    </div>
                </Col>
            </> 
            : 
            <>
                <Col md={6} style={{textAlign:'left'}}>
                    <h3>{props.info.title}</h3>
                    <div>
                        {props.info.badges.map( badge => {
                            return <Badge style={{backgroundColor:'red!important'}}>{badge}</Badge>
                        })}
                    </div>
                    <p>{props.info.desc}</p>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'start'}}>
                        <Button style={{marginRight:'1rem', width:'fit-content'}} size='sm' onClick={gotoPage}><BsGithub/> Github</Button>
                        <Button style={{marginRight:'1rem', width:'fit-content', display: props.info.live == 'none' ? 'none' : 'block'}} size='sm' onClick={gotoLivePage}><IoLogoWebComponent/> Live Page</Button>
                    </div>
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