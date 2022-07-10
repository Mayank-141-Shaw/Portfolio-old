import React, { useState } from 'react'
import './ProjectBox.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from 'react-bootstrap'

function ProjectBox(props) {

    const [toggleViewProjectBtn, setViewBtn] = useState(false)

    const toggleHoverViewButton = () => {
        setViewBtn(!toggleViewProjectBtn);
      }
    

  return (
    <>
        <div className='project-card' style={{aspectRatio:'1', backgroundColor:props.color}}
                onMouseEnter={toggleHoverViewButton} onMouseLeave={toggleHoverViewButton} >

            <Image src={props.img} alt='thg' height={'100%'} />

            <div className={`hover-round ${toggleViewProjectBtn ? 'show-hover' : 'hide-hover'}`} 
                style={{color:'black'}}>
                View Project
            </div>
        </div>
    </>
  )
}

export default ProjectBox