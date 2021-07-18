import React, { FC } from 'react'
import styles from './SubHeader.module.scss'
import { Jumbotron, Container } from 'react-bootstrap'

interface StaticIndexProps {
  key: string
  id: string
  name: string
  teachers: string[]
}

const SubHeader = (props: StaticIndexProps) => (
  <Container className={styles.ContainerPadding}>
    <Jumbotron className={styles.JumbotronSize}>
      <h1>{props.name}</h1>
      <p>教員：{props.teachers}</p>
    </Jumbotron>
  </Container>
)

export default SubHeader
