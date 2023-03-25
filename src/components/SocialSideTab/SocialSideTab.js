import React, { useState } from "react";
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./SocialSideTab.css";

export const SideTabLink = (props) => {
  const [isHover, setHoverState] = useState(false);

  const toggleHover = () => {
    setHoverState(!isHover);
  };

  return (
    <a
      className={"tab-item"}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`item ${isHover ? "expand" : ""}`}
        style={
          props.image !== undefined
            ? { backgroundImage: props.image }
            : { backgroundColor: props.color }
        }
      >
        {props.icon}
      </div>
    </a>
  );
};

function SocialSideTab() {
  let containerStyle = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    right: "0",
    height: "100vh",
    justifyContent: "center",
    zIndex: "99",
  };

  return (
    <>
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SideTabLink
            color="#171515"
            link="https://github.com/Mayank-141-Shaw/"
            icon={<BsGithub />}
          />
          <SideTabLink
            color="rgb(255, 0,0)"
            link="https://www.youtube.com"
            icon={<BsYoutube />}
          />
          <SideTabLink
            color="purple"
            image="radial-gradient(farthest-corner at 0% 100%, #FFDC80, #FCAF45, #F77737, #F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)"
            link="https://www.instagram.com/pixel.guy616/"
            icon={<BsInstagram />}
          />
          <SideTabLink
            color="rgb(0, 119, 181)"
            link="https://www.linkedin.com/in/mayank-shaw-5995071bb/"
            icon={<BsLinkedin />}
          />
        </div>
      </div>
    </>
  );
}

export default SocialSideTab;
