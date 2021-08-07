import * as React from "react"

import "./destyle.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

import Navbar from "./Navbar"
import ProfileCard from "./ProfileCard"
import BlogCard from "./BlogCard"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">
        <ProfileCard />
        <div className="content">{children}</div>
      </div>
      <footer>Copyright Ken Cheung 2021</footer>
    </>
  )
}

export default Layout
