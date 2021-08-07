import React, { useState } from "react"
import { Link } from "gatsby"
import { Navbar as BootstrapNavBar, Container, Nav } from "react-bootstrap"

import * as styles from "./Navbar.module.css"

function NavBar() {
  return (
    <BootstrapNavBar bg="bg-white" expand="lg" className={styles.nav}>
      <BootstrapNavBar.Brand className={styles.title} href="#home">
        KEN'S BLOG
      </BootstrapNavBar.Brand>
      <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavBar.Collapse
        className="justify-content-end"
        id="basic-navbar-nav"
      >
        <Nav fill="true" as="ul">
          <Nav.Item className={styles.link} as="li">
            <Link to="/">HOME</Link>
          </Nav.Item>
          <Nav.Item className={styles.link} as="li">
            <Link to="/about">ABOUT</Link>
          </Nav.Item>
          <Nav.Item className={styles.link} as="li">
            <Link to="/projects">PROJECTS</Link>
          </Nav.Item>
        </Nav>
      </BootstrapNavBar.Collapse>
    </BootstrapNavBar>
  )
}

export default NavBar
