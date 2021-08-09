import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Alert } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./404.module.css"
import { graphql } from "gatsby"

const NotFoundPage = () => (
  <Layout showProfile={false}>
    <Seo title="404 Not found" />
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <StaticImage
          width={32}
          height={32}
          src="https://img.icons8.com/pastel-glyph/64/000000/page-not-found--v2.png"
        />
      </div>
      <Alert variant="light">404 Not Found</Alert>
    </div>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query Locales($language: String!) {
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
