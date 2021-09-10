import React from "react"
import * as styles from "./ProjectCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"
import { SiNetlify, SiFirebase } from "react-icons/si"

function ProjectCard({
  thumbnail,
  description,
  linkToDeploy,
  linkToRepo,
  name,
  stack,
}) {
  const thumb = getImage(thumbnail)
  const stacks = stack.split(" ")
  const deploymentLocation = linkToDeploy.includes("netlify")
    ? "Netlify"
    : "Firebase"
  const deployLogo =
    deploymentLocation === "Netlify" ? <SiNetlify /> : <SiFirebase />

  return (
    <Card className={styles.card}>
      <GatsbyImage image={thumb} alt={`${name} thumbnail`} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.name}>{name}</Card.Title>
        <div className={styles.stacks}>
          {stacks.map(stack => (
            <p key={stack}>#{stack}</p>
          ))}
        </div>
        <Card.Text className={styles.description}>{description}</Card.Text>
        <div className={styles.bottomRow}>
          <a href={linkToRepo} target="_blank" rel="noreferrer">
            <FaGithub />
            Github
          </a>
          <a href={linkToDeploy} target="_blank" rel="noreferrer">
            {deployLogo}
            {deploymentLocation}
          </a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
