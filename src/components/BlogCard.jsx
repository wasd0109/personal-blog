import React from "react"
import { Card, Container } from "react-bootstrap"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import Moment from "react-moment"

import * as styles from "./BlogCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function BlogCard({ slug, title, excerpt, date, thumbnail, hashtags }) {
  const thumb = getImage(thumbnail)
  const { i18n, t } = useI18next("blogcard")
  console.log(slug)
  return (
    <Container fluid>
      <Card className={styles.card}>
        <GatsbyImage
          image={thumb}
          alt="blog thumbnail"
          className={styles.image}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.date}>
            {t("PostTime")}:{" "}
            <Moment date={date} format="L" locale={i18n.language} />
          </Card.Text>
          <Card.Text className={styles.excerpt}>{excerpt}</Card.Text>
          <div className={styles.bottomRow}>
            <div className={styles.hashtags}>
              {hashtags.map(hashtag => (
                <p key={hashtag}>#{hashtag}</p>
              ))}
            </div>
            <Link to={`/blogs/${slug}`}>{t("ReadMore")}</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogCard
