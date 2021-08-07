import React from "react"
import { Card, Container } from "react-bootstrap"
import { Link } from "gatsby"
import Moment from "react-moment"

import * as styles from "./BlogCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function BlogCard({ slug, title, excerpt, date, thumbnail, hashtags }) {
  const thumb = getImage(thumbnail)
  return (
    <Container fluid>
      <Card className={styles.card}>
        <GatsbyImage image={thumb} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.date}>
            Posted at: <Moment date={date} format="YYYY/MM/DD" />
          </Card.Text>
          <Card.Text className={styles.excerpt}>{excerpt}</Card.Text>
          <div className={styles.bottomRow}>
            <div className={styles.hashtags}>
              {hashtags.map(hashtag => (
                <p key={hashtag}>{hashtag}</p>
              ))}
            </div>
            <Link to={slug}>Read more</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogCard
