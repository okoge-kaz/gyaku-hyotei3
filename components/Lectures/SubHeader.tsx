import React, { FC } from 'react'
import styles from './SubHeader.module.scss'
import { Jumbotron, Container } from 'react-bootstrap'

const SubHeader = () => (
  <Container className={styles.ContainerPadding}>
    <Jumbotron className={styles.JumbotronSize}>
      <h1>Test 系</h1>
    </Jumbotron>
  </Container>
)

export default SubHeader
