import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <BlogCard />
      <BlogCard />
    </div>
  </Layout>
)

export default IndexPage
