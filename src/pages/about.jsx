import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card, Container } from "react-bootstrap"
import { graphql } from "gatsby"
import useFirebaseAnalytics from "../utils/fbAnalytics"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as styles from "./about.module.css"

function AboutPage({ data }) {
  useFirebaseAnalytics("visited_projects_page")
  const { t } = useTranslation("about")
  const profileImage = getImage(data.file)
  return (
    <Layout showProfile={false}>
      <Seo title={t("PageName")} description="About the author" />

      <Container fluid>
        <Card className={styles.card}>
          <div className={styles.image}>
            <GatsbyImage image={profileImage} alt="blog thumbnail" />
          </div>
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.name}>Ken Cheung</Card.Title>

            <Card.Text className={styles.text}>
              {t("SelfDescription")}
            </Card.Text>
            <div className={styles.hashtags}>
              <p className={styles.hashtag}>#React</p>
              <p className={styles.hashtag}>#Node</p>
              <p className={styles.hashtag}>#F1</p>
              <p className={styles.hashtag}>#FF14</p>
            </div>
            <div className={styles.aboutContent}>
              <p>{t("SelfInfo.Sentence1")}</p>
              <p>{t("SelfInfo.Sentence2")}</p>
            </div>
            <div className={styles.logos}>
              <a
                href="https://github.com/wasd0109"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                wasd0109
              </a>
              <a
                href="https://twitter.com/wasd0109_dev"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
                wasd0109_dev
              </a>
              <a
                href="mailto:wasd0109.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IoMail />
                wasd0109.dev@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/wasd0109/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                wasd0109
              </a>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutInfo($language: String!) {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        gatsbyImageData
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
