import React from "react"
import { Card, Container } from "react-bootstrap"

import * as styles from "./BlogCard.module.css"

function BlogCard() {
  return (
    <Container>
      <Card style={{ width: "18rem" }} className={styles.card}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogCard
