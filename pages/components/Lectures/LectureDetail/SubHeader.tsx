import React, { FC } from 'react'
import styles from './SubHeader.module.scss'
import { Jumbotron, Container } from 'react-bootstrap'

const SubHeader: FC = () => (
  <Container className={styles.ContainerPadding}>
    <Jumbotron className={styles.JumbotronSize}>
      <h1>科目名</h1>
      <p>教員：教員名1, 教員名2</p>
    </Jumbotron>
  </Container>
)

export default SubHeader
