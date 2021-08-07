import * as React from "react"
import { graphql, Link } from "gatsby"
import { useFirebase } from "gatsby-plugin-firebase"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"

const IndexPage = ({ data }) => {
  useFirebase(firebase => {
    firebase.analytics().logEvent("visited_home_page")
  }, [])
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blogs)/" } }
    ) {
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
