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
        <div className='project-card' style={{
                aspectRatio:'1', 
                backgroundImage:`url(${props.img})`
            }}
                onMouseEnter={toggleHoverViewButton} onMouseLeave={toggleHoverViewButton} >

            <div className={`hover-round ${toggleViewProjectBtn ? 'show-hover' : 'hide-hover'}`} >
                View Project
            </div>
        </div>
    </>
  )
}

export default ProjectBox