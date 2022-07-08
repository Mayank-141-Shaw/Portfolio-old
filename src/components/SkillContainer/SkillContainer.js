import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SkillTab from '../SkillTab/SkillTab'

import { SkillData } from './SkillData'

function SkillContainer() {
  return (
    <Container style={{backgroundColor:'rgba(26,26,26,0.5)', padding:'4rem 2rem'}}>
        <p>Click to see more details</p>
        <Row>
            
            { SkillData.map(
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