import { Segment } from '../interfaces/segment'
import styles from './Content.module.scss'
import ContentsCell from './components/ContentsCell'
import React from 'react'

interface StaticIndexProps {
  segments: Segment[]
}

const SegmentIndex = (props: StaticIndexProps) => {
  return (
    <div className={styles.main}>
      {(props.segments || []).map(segment => (
        <ContentsCell
          key={segment.school}
          school={segment.school}
          departments={segment.departments}
        />
      ))}
    </div>
  )
}

export default SegmentIndex
