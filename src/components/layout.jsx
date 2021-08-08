import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "react-bootstrap"

import "./destyle.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

import Navbar from "./Navbar"
import ProfileCard from "./ProfileCard"

const Layout = ({ children, showProfile }) => {
  const { title: siteTitle } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata
  return (
    <>
      <Navbar siteTitle={siteTitle} />
      {showProfile ? (
        <div className="main">
          <ProfileCard />
          <div className="content">{children}</div>{" "}
        </div>
      ) : (
        <div className="content">{children}</div>
      )}
    </>
  )
}

export default Layout
