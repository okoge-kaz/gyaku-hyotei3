import React from 'react'
import SubHeader from '../../components/Lectures/SubHeader'
import { Container } from 'react-bootstrap'
import Content from '../../components/Lectures/LecturesListContent'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { DepartmentCoursesListWithLevel, Course } from '../../interfaces/courselist'
import { Segment, Department } from '../../interfaces/segment'
import Head from 'next/head'

interface StaticIndexProps {
  courseslists: DepartmentCoursesListWithLevel[]
  departmentid: number
}

// interface StaticIndexProps {
//   segments: Segment[]
// }
let departmentnames: string[] = new Array()
departmentnames.push('')

const DepartmentCoursesList = (props: StaticIndexProps) => {
  // if (typeof props.courseslist === 'undefined') {
  //   return <></>
  // }
  const title = 'Titech Info: 逆評定'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SubHeader key={props.departmentid} name={departmentnames[props.departmentid]}/>
      <Container className="mt-4">
        {(props.courseslists || []).map(courselist => (
          <Content key={courselist.level} level={courselist.level} courses={courselist.courses} />
        ))}
      </Container>
    </>
  )
}

export default DepartmentCoursesList

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://titechinfo-data.s3-ap-northeast-1.amazonaws.com/course-review-tmp/school_departments.json`,
  )

  const segments: Segment[] = await res.json()

  let departmentpaths: Department[] = new Array()
  segments.map(segment => segment.departments.map(department => departmentpaths.push(department)))
  segments.map(segment =>
    segment.departments.map(department => departmentnames.push(department.name)),
  )

  return {
    paths: departmentpaths.map(departmentpath => `/${departmentpath.id}`),
    fallback: false,
  }
}
// 以下の記述ないようについてよう検証
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const params = context.params!
  const res = await fetch(
    `https://titechinfo-data.s3-ap-northeast-1.amazonaws.com/course-review-tmp/department/${params.id}.json`,
  )
  const courseslists: DepartmentCoursesListWithLevel[] = await res.json()
  const departmentid: number = Number(params.id)
  return {
    props: {
      courseslists,
      departmentid,
    },
  }
}
