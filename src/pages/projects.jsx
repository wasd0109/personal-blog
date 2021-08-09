import { graphql } from "gatsby"
import React from "react"
import useFirebaseAnalytics from "../utils/fbAnalytics"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/seo"

import { Container } from "react-bootstrap"

import * as styles from "./projects.module.css"

function ProjectsPage({ data }) {
  useFirebaseAnalytics("visited_projects_page")
  const { t } = useTranslation("projects")
  const projects = data.allMdx.edges
  return (
    <Layout>
      <Seo title={t("PageName")} description="Projects Page" />
      <Container fluid className={styles.container}>
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
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query Projects($language: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { language: { eq: $language } }
        fileAbsolutePath: { regex: "/(projects)/" }
      }
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
