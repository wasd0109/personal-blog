/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { create } = require("domain")
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
}
