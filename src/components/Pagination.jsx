import React from "react"
import { Link } from "gatsby"
import * as styles from "./Pagination.module.css"
import { Container } from "react-bootstrap"

function Pagination({ numPages, currentPages }) {
  const previous = currentPages < 2 ? `/pages/${currentPages - 1}` : "/"
  const next = `/pages/${currentPages + 1}`
  const previousDisabled = currentPages === 1 ? true : false
  const nextDisabled = currentPages === numPages ? true : false
  if (numPages === 1) return null

  return (
    <Container fluid>
      <div className={styles.pagination}>
        <Link className={previousDisabled ? styles.disabled : ""} to={previous}>
          Previous
        </Link>
        <Link className={nextDisabled ? styles.disabled : ""} to={next}>
          Next
        </Link>
      </div>
    </Container>
  )
}

export default Pagination
