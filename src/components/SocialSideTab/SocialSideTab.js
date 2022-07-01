import React, { useState } from 'react'
import { BsGoogle, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import './SocialSideTab.css'


export const SideTabLink = (props) => {
    const [isHover, setHoverState] = useState(false)

    const toggleHover = () => {
        setHoverState(!isHover);
    }

    return (
        <a className={'tab-item'}
            onMouseEnter={toggleHover} onMouseLeave={toggleHover}
            href={props.link} target="_blank">
            <div className={`item ${isHover ? 'expand' : ''}`} 
                style={ props.image !== undefined ? {backgroundImage:props.image} : {backgroundColor:props.color}}
            >
                {props.icon} 
            </div>
        </a>
    )
}



function SocialSideTab() {

    let containerStyle = {
        position:'fixed',
        display:'flex',
        flexDirection:'column',
        right:'0',
        height:'100vh',
        justifyContent:'center',
        zIndex:'99'
    }

  return (
    <>
        <div style={containerStyle}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <SideTabLink color='rgb(0, 119, 181)' link='https://www.google.com' icon={<BsGoogle/>} />
                <SideTabLink color='rgb(255, 0,0)' link='https://www.youtube.com' icon={<BsYoutube />} />
                <SideTabLink color='purple' image='radial-gradient(farthest-corner at 0% 100%, #FFDC80, #FCAF45, #F77737, #F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)' link='https://www.instagram.com' icon={<BsInstagram />} />
                <SideTabLink color='rgb(0, 119, 181)' link='https://www.linkedin.com' icon={<BsLinkedin />} />
            </div>
        </div>
    </>
  )
}

export default SocialSideTab