import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import * as styles from "./index.module.css"
import { NavItem } from "react-bootstrap"
import ProfileCard from "../components/ProfileCard"

const IndexPage = ({ data }) => {
  const blogPosts = data.allMdx.edges
  return (
    <Layout showProfile={true}>
      <Seo title="Home" />
      <div>
        {blogPosts.map(({ node: blogPost }) => (
          <BlogCard
            key={blogPost.id}
            slug={blogPost.slug}
            title={blogPost.frontmatter.title}
            excerpt={blogPost.frontmatter.excerpt}
            date={blogPost.frontmatter.data}
            thumbnail={blogPost.frontmatter.thumbnail}
            hashtags={blogPost.frontmatter.hashtags.split(" ")}
          />
        ))}
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
            hashtags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
