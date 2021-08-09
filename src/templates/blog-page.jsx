import React from "react"
import { graphql } from "gatsby"
import { Container, Card } from "react-bootstrap"
import Moment from "react-moment"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useI18next } from "gatsby-plugin-react-i18next"
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
  const { t, i18n } = useI18next(["blog-page", "blogcard"])
  return (
    <Layout showProfile={true}>
      <Seo title={`${t("PageName")} | ${title}`} description={excerpt} />
      <Container fluid className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className={styles.cardBody}>
            <h1>{title}</h1>
            <p>
              {t("PostTime")}:{" "}
              <Moment date={date} format="L" locale={i18n.language} />
            </p>
            <GatsbyImage
              image={thumb}
              alt="blog thumbnail"
              className={styles.thumbnail}
            />
            <MDXRenderer>{body}</MDXRenderer>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query Blog($slug: String!, $language: String!) {
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
