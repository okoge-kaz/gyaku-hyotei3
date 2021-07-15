import React from 'react'
import { Container } from 'react-bootstrap'
import SubHeader from '../../../components/Lectures/LectureDetail/SubHeader'
import Content from '../../../components/Lectures/LectureDetail/LectureDetailContent'

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
