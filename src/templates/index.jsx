import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import useFirebaseAnalytics from "../utils/fbAnalytics"
import Pagination from "../components/Pagination"
import { navigate } from "gatsby-link"

const IndexPage = ({ data, pageContext }) => {
  useFirebaseAnalytics("visited_home_page")

  const blogPosts = data.allMdx.edges
  return (
    <Layout showProfile={true}>
      <Seo title="Home" />
      <div>
        {blogPosts.map(({ node: blogPost }) => (
          <Link to={`/blogs/${blogPost.slug}`}>
            <BlogCard
              key={blogPost.id}
              slug={blogPost.slug}
              title={blogPost.frontmatter.title}
              excerpt={blogPost.frontmatter.excerpt}
              date={blogPost.frontmatter.data}
              thumbnail={blogPost.frontmatter.thumbnail}
              hashtags={blogPost.frontmatter.hashtags.split(" ")}
            />
          </Link>
        ))}
      </div>
      <Pagination
        numPages={pageContext.numPages}
        currentPages={pageContext.currentPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts($skip: Int!, $limit: Int!, $language: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/(blogs)/" }
        frontmatter: { language: { eq: $language } }
      }
      limit: $limit
      skip: $skip
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
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default IndexPage
