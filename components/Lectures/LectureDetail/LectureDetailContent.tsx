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
        <div className={styles.title}>基本情報</div>

        <div>
          <p>
            <span className={styles.subtitle}>教員</span> {props.teachers}
          </p>
          <p>
            <span className={styles.subtitle}>総合評価</span>
          </p>
        </div>

        <div className={styles.title}>詳細情報</div>

        <div>

          <div className={styles.content}>
            <span className={styles.subtitle}>良い点</span>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
          </div>

          <div className={styles.content}>
            <span className={styles.subtitle}>悪い点</span>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
          </div>

          <div className={styles.content}>
            <span className={styles.subtitle}>その他</span>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
            <li>てきすとてきすとてきすとてきすとてきすと</li>
          </div>

        </div>

      </div>
    </Container>
  )
}

export default LecturesListContent
