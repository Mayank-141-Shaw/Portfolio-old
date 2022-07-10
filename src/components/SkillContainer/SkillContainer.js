import React from 'react'
import { Col, Container, Image, Row, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SkillTab from '../SkillTab/SkillTab'
import './SkillContainer.css'

import { SkillData } from './SkillData'

function SkillContainer() {
  return (
    <Container style={{backgroundColor:'rgba(26,26,26,0.5)', padding:'4rem 2rem'}}>
        <p style={{textAlign:'center'}}>Click a tab to see more details</p>

        <Row className='justify-content-center my-5'>
            <a className="skill-shortcut" href="#fend" >Front End</a>
            <a className="skill-shortcut" href="#bend" >Back End</a>
            <a className="skill-shortcut" href="#cs" >CS</a>
            <a className="skill-shortcut" href="#vsctrl" >Version Control</a>
            <a className="skill-shortcut" href="#tools" >Tools</a>
            <a className="skill-shortcut" href="#xr" >XR</a>
        </Row>
        <Row>
            
            <h2 id="bend" className="pt-5">Back End</h2>

            { SkillData.bend.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

            <h2 id="fend" className="pt-5">Front End</h2>

            { SkillData.fend.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

            <h2 id="cs" className="pt-5">CS</h2>

            { SkillData.cs.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

            <h2 id="vsctrl" className="pt-5">Version Control</h2>

            { SkillData.vsctrl.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

            <h2 id="tools" className="pt-5">Tools</h2>

            { SkillData.tools.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

            <h2 id="xr" className="pt-5">XR</h2>

            { SkillData.xr.map(
                skill => {
                    return (
                        <Col sm={4} md={2} xs={6} lg={2}>
                            <SkillTab icon={skill.icon} title={skill.title} time={skill.time} score={skill.score} text={skill.text}/>
                        </Col>
                );}
            ) }

        </Row>
    </Container>
  )
}

export default SkillContainer