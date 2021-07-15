import React from 'react'
import styles from './LectureDetailContent.module.scss'
import { Container } from 'react-bootstrap'

const LecturesListContent = () => {
  return (
    <Container className={styles.ContainerPadding}>
      <div className={styles.main}>
        <div>基本情報</div>
      </div>
      <div>
        <p>教員 教員名1, 教員名2</p>
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
