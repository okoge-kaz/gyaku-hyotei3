// import { Department } from '../../interfaces/segment'
import styles from './DepartmentCell.module.scss'
import React from 'react'
import Link from 'next/link'

type DepartmentCellProps = {
  key: number
  id: number
  name: string
}

const DepartmentCell = (props: DepartmentCellProps) => {
  return (
    <div className={styles.main}>
      <div key={props.id}>
        <Link href="./Lectures/LecturesList" passHref>
          <a className={styles.link}>{props.name}</a>
        </Link>
      </div>
    </div>
  )
}

export default DepartmentCell
