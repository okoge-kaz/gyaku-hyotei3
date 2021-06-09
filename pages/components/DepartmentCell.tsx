// import { Department } from '../../interfaces/segment'
import styles from './DepartmentCell.module.scss'
import React from 'react'
type DepartmentCellProps = {
  key: number
  id: number
  name: string
}

const DepartmentCell = (props: DepartmentCellProps) => {
  return (
    <div className={styles.main}>
      <div key={props.id}>{props.name}</div>
    </div>
  )
}

export default DepartmentCell
