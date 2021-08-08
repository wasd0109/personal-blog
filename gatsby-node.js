/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogQuery = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (blogQuery.errors) {
    reporter.panicOnBuild("Error while running blog GraphQL query.")
    return
  }
  const blogTemplate = path.resolve("./src/templates/blog-page.jsx")
  blogQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  const blogsList = await graphql(`
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
  `)
  if (blogsList.errors) {
    reporter.panicOnBuild("Error while running blog list GraphQL query.")
    return
  }
  const blogs = blogsList.data.allMdx.edges
  const blogsPerPage = 10
  const numPages = Math.ceil(blogs.length / blogsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: path.resolve("./src/templates/index.jsx"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
