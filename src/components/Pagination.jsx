import React from "react"
import { Link } from "gatsby"
import * as styles from "./Pagination.module.css"
import { Container } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"

function Pagination({ numPages, currentPages }) {
  const { t } = useTranslation()
  const previous = currentPages !== 2 ? `/pages/${currentPages - 1}` : "/"
  const next = `/pages/${currentPages + 1}`
  const previousDisabled = currentPages === 1 ? true : false
  const nextDisabled = currentPages === numPages ? true : false
  if (numPages === 1) return null
  return (
    <Container fluid>
      <div className={styles.pagination}>
        <Link className={previousDisabled ? styles.disabled : ""} to={previous}>
          {t("PreviousPage")}
        </Link>
        <Link className={nextDisabled ? styles.disabled : ""} to={next}>
          {t("NextPage")}
        </Link>
      </div>
    </Container>
  )
}

export default Pagination
