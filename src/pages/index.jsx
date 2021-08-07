import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import * as styles from "./index.module.css"

const IndexPage = ({ data }) => {
  const blogPosts = data.allMdx.edges
  console.log(blogPosts)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        {blogPosts.map(blogPost => {
          return <BlogCard key={blogPost.id} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            excerpt
            date
          }
        }
      }
    }
  }
`

export default IndexPage
