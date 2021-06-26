import styles from './LecturesListCell.module.scss'
import React from 'react'
import Link from 'next/link'

type LecturesListContentCell = {
  key: number
  id: number
  name: string
  teacher: string
}

const LecturesListContentCell = () => {
  return (
    <div className={styles.main}>
      <div>
        <Link href="/components/Lectures/LectureDetail/LectureDetail" passHref>test</Link>
      </div>
    </div>
  )
}

export default LecturesListContentCell