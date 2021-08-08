import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <div className="main">
        {showProfile ? <ProfileCard /> : null}
        <div className="content">{children}</div>
      </div>
    </>
  )
}

export default Layout
