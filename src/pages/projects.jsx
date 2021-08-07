import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/seo"

function ProjectsPage({ data }) {
  const projects = data.allMdx.edges
  return (
    <Layout>
      <Seo title={`Projects`} description="Projects Page" />
      {projects.map(({ node: project }) => (
        <ProjectCard
          key={project.id}
          thumbnail={project.frontmatter.thumbnail}
          description={project.frontmatter.description}
          linkToDeploy={project.frontmatter.linkToDeploy}
          linkToRepo={project.frontmatter.linkToRepo}
          name={project.frontmatter.name}
          stack={project.frontmatter.stack}
        />
      ))}
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query Projcets {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            description
            linkToDeploy
            linkToRepo
            name
            stack
          }
        }
      }
    }
  }
`
