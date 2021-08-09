import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

import * as styles from "./ProfileCard.module.css"

function ProfileCard() {
  const { t } = useTranslation("profile")
  const data = useStaticQuery(graphql`
    query ProfileInfo {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const profileImage = getImage(data.file)

  return (
    <Container fluid>
      <Card className={styles.card}>
        <div className={styles.image}>
          <GatsbyImage image={profileImage} />
        </div>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.name}>Ken Cheung</Card.Title>

          <Card.Text className={styles.text}>{t("SelfDescription")}</Card.Text>
          <div className={styles.hashtags}>
            <p className={styles.hashtag}>#React</p>
            <p className={styles.hashtag}>#Node</p>
            <p className={styles.hashtag}>#F1</p>
            <p className={styles.hashtag}>#FF14</p>
          </div>
          <div className={styles.logos}>
            <a
              href="https://github.com/wasd0109"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/wasd0109_dev"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:wasd0109.dev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <IoMail />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProfileCard
