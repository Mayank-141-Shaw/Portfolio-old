import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDownload } from 'react-icons/fa'

import './ResumeBtn.css'

function ResumeBtn() {

    const renderTooltip = (props) => (
        <Tooltip id='resume-tooltip' {...props}>
            Click to download resume
        </Tooltip>
    )

  return (
    <OverlayTrigger
        placement='top'
        delay={{show:250, hide:400}}
        overlay={renderTooltip}
    >
        <div className='resume'>
            <a href='/resume.pdf' download="Mayank-Resume"><FaDownload /> Resume</a>
        </div>
    </OverlayTrigger>  
  )
}

export default ResumeBtn