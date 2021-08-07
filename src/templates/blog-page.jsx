import React from "react"
import { graphql } from "gatsby"
import { Container, Card } from "react-bootstrap"
import Moment from "react-moment"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import useFirebaseAnalytics from "../utils/fbAnalytics"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./blog-page.module.css"

function BlogTemplate({ data }) {
  const {
    body,
    frontmatter: { title, excerpt, date, thumbnail, hashtags },
  } = data.mdx

  useFirebaseAnalytics(`visited_${title.replace(" ", "_")}_blog`)

  const thumb = getImage(thumbnail)
  return (
    <Layout showProfile={true}>
      <Seo title={`Blog | ${title}`} description={excerpt} />
      <Container fluid>
        <Card className={styles.card}>
          <Card.Body>
            <h1>{title}</h1>
            <p>
              <Moment date={date} format="YYYY/MM/DD HH:MM" />
            </p>
            <Container>
              <GatsbyImage
                image={thumb}
                alt="blog thumbnail"
                className={styles.thumbnail}
              />
              <MDXRenderer>{body}</MDXRenderer>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        hashtags
        excerpt
        date
      }
    }
  }
`
