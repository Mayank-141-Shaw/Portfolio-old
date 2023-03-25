import React, { useState } from "react";
import { Button, Offcanvas, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { SidebarData } from "./NavbarData";

import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleShow = () => {
    setRotate(true);
    setShow(true);
  };
  const handleClose = () => {
    setRotate(false);
    setShow(false);
  };
  return (
    <Container style={{ position: "fixed" }}>
      <Button
        className={rotate ? "nav-btn rotate" : "nav-btn"}
        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        onClick={handleShow}
      >
        <FaBars size={50} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CONTENTS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="side-nav">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Nav.Link href={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Nav.Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default Navbar;
