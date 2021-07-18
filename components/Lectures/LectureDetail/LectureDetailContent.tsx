import React from 'react'
import styles from './LectureDetailContent.module.scss'
import { Container } from 'react-bootstrap'

interface StaticIndexProps {
  key: string
  id: string
  name: string
  teachers: string[]
}

const LecturesListContent = (props: StaticIndexProps) => {
  return (
    <Container className={styles.ContainerPadding}>
      <div className={styles.main}>
        <div>基本情報</div>
      </div>
      <div>
        <p>教員 {props.teachers}</p>
        <p>総合評価</p>
      </div>
      <div className={styles.main}>
        <div>詳細情報</div>
      </div>
      <div>
        <div>
          良い点
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
        </div>
        <div>
          悪い点
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
        </div>
        <div>
          その他
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
          <li>テキスト、テキスト</li>
        </div>
      </div>
    </Container>
  )
}

export default LecturesListContent
