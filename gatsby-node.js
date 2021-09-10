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
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/(blogs)/" } }
      ) {
        edges {
          node {
            frontmatter {
              language
            }
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
    const language = node.frontmatter.language
    if (language === "en")
      createPage({
        path: `blogs/${node.slug}`,
        component: blogTemplate,
        context: {
          slug: node.slug,
          language: node.frontmatter.language,
        },
      })
    if (language === "jp")
      createPage({
        path: `blogs/${node.slug}`,
        component: blogTemplate,
        context: {
          slug: node.slug,
          language: node.frontmatter.language,
        },
      })
  })

  const blogsPerPage = 10

  const blogsList = await graphql(`
    query BlogPosts {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/(blogs)/" }
          frontmatter: { language: { eq: "en" } }
        }
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

  const numPages = Math.ceil(blogs.length / blogsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `en/` : `en/pages/${i + 1}`,
      component: path.resolve("./src/templates/index.jsx"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages: numPages,
        currentPage: i + 1,
      },
    })
  })

  const jpBlogsList = await graphql(`
    query BlogPosts {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { language: { eq: "jp" } }
          fileAbsolutePath: { regex: "/(blogs)/" }
        }
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
  if (jpBlogsList.errors) {
    reporter.panicOnBuild("Error while running blog list GraphQL query.")
    return
  }
  const jpBlogs = jpBlogsList.data.allMdx.edges
  const jpNumPages = Math.ceil(jpBlogs.length / blogsPerPage)
  Array.from({ length: jpNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: path.resolve("./src/templates/index.jsx"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages: jpNumPages,
        currentPage: i + 1,
        language: "jp",
      },
    })
  })
}
