import React, { FC } from 'react'
import styles from './SubHeader.module.scss'
import { Jumbotron, Container } from 'react-bootstrap'

interface StaticIndexProps {
  key: number
  name: string
}

const SubHeader = (props: StaticIndexProps) => (
  <Container className={styles.ContainerPadding}>
    <Jumbotron className={styles.JumbotronSize}>
      <h1>{props.key} 系</h1>
    </Jumbotron>
  </Container>
)

export default SubHeader
