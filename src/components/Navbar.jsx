import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Navbar as BootstrapNavBar, Nav, Dropdown } from "react-bootstrap"
import * as styles from "./Navbar.module.css"
import { ImEarth } from "react-icons/im"
import { graphql, useStaticQuery } from "gatsby"

function NavBar({ siteTitle }) {
  const { languages, originalPath, t, i18n } = useI18next("navbar")
  const languageChange = i18n.language === "en" ? "jp" : "en"
  return (
    <BootstrapNavBar bg="bg-white" expand="lg" className={styles.nav}>
      <BootstrapNavBar.Brand className={styles.title} href="#home">
        <Link to="/">{siteTitle.toUpperCase()}</Link>
      </BootstrapNavBar.Brand>
      <BootstrapNavBar.Toggle
        aria-controls="basic-navbar-nav"
        className={styles.hamburger}
      />
      <BootstrapNavBar.Collapse
        className={styles.navLinks}
        id="basic-navbar-nav"
      >
        <Nav fill="true" as="ul">
          <Nav.Item className={styles.link} as="li">
            <Link to="/">{t("HomeButton")}</Link>
          </Nav.Item>
          <Nav.Item className={styles.link} as="li">
            <Link to="/about">{t("AboutButton")}</Link>
          </Nav.Item>
          <Nav.Item className={styles.link} as="li">
            <Link to="/projects">{t("ProjectsButton")}</Link>
          </Nav.Item>
          <Nav.Item className={styles.link} as="li">
            <Link
              className={styles.languageLink}
              to={originalPath}
              language={languageChange}
            >
              <ImEarth />
              {languageChange.toUpperCase()}
            </Link>
          </Nav.Item>
        </Nav>
      </BootstrapNavBar.Collapse>
    </BootstrapNavBar>
  )
}

export default NavBar
