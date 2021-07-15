import styles from './LecturesListCell.module.scss'
import React from 'react'
import Link from 'next/link'
import { DepartmentCoursesListWithLevel, Course } from '../../interfaces/courselist'

interface StaticIndexProps {
  key: number
  id: number
  name: string
  teachers: string[]
  evaluation: number
}

const LecturesListContentCell = (props: StaticIndexProps) => {
  return (
    <div className={styles.main}>
      <div>
        <Link href="" passHref>
          <a className={styles.link}>{props.name}</a>
        </Link>
        <div className={styles.teachers}>
        {props.teachers.map(teacher => (
          <div className={styles.teacher}>{teacher}</div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default LecturesListContentCell
