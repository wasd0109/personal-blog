import * as React from "react"

import "./destyle.css"

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="side"></div>
      <div className="content"></div>
    </div>
  )
}

export default Layout
