import React from 'react'
import syles from './LectureDetail.module.scss'
import { Container } from 'react-bootstrap'
import SubHeader from './SubHeader'
import Content from './LectureDetailContent'

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
