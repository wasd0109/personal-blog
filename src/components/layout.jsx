import * as React from "react"

import "./destyle.css"
import "./layout.css"

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Navbar"
import ProfileCard from "./ProfileCard"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">
        <ProfileCard />
        <div className="content"></div>
      </div>
    </>
  )
}

export default Layout
