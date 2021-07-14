import styles from './LecturesList.module.scss'
import React from 'react'
import SubHeader from './SubHeader'
import { Container } from 'react-bootstrap'
import Content from './LecturesListContent'

const index = () => {
  return (
    <div>
      <SubHeader />
      <Container className="mt-4">
        <Content/>
      </Container>
    </div>
  )
}

export default index
