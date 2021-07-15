import React from 'react'
import { Container } from 'react-bootstrap'
import SubHeader from '../../../components/Lectures/LectureDetail/SubHeader'
import Content from '../../../components/Lectures/LectureDetail/LectureDetailContent'
import {Course} from '../../../interfaces/courselist'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'

interface StaticIndexProps {
  course: Course
}

const CourseDetail = (props: StaticIndexProps) => {
  return (
    <div>
      <SubHeader />
      <Container className="mt-4">
        <Content/>
      </Container>
    </div>
  )
}

export default CourseDetail
