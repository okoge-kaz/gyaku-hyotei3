import React from 'react'
import SubHeader from '../../components/Lectures/SubHeader'
import { Container } from 'react-bootstrap'
import Content from '../../components/Lectures/LecturesListContent'

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