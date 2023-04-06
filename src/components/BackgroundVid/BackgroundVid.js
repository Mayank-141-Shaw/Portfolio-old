import React from "react";

import dotsVid from "../../assets/videos/dots-bg.mp4";

function BackgroundVid() {
  return (
    <div
      style={{
        zIndex: "-1",
        position: "fixed",
        top: 0,
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <video style={{ objectFit: "cover" }} muted loop autoPlay>
        <source src={dotsVid} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVid;
