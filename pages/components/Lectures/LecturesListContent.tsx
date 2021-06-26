import style from './LecturesListContent.module.scss'
import React from 'react'
import { Container } from 'react-bootstrap'
import LecturesListContentCell from './LecturesListCell'

const LecturesListContent = () => {
  return (
    <Container className={style.ContainerPadding}>
      <div className={style.main}>
        <div>100番台</div>
      </div>
      <div>
        <LecturesListContentCell />
        <LecturesListContentCell />
        <LecturesListContentCell />
      </div>
      <div className={style.main}>
        <div>200番台</div>
      </div>
      <div>
        <LecturesListContentCell />
        <LecturesListContentCell />
        <LecturesListContentCell />
      </div>
      <div className={style.main}>
        <div>300番台</div>
      </div>
      <div>
        <LecturesListContentCell />
        <LecturesListContentCell />
        <LecturesListContentCell />
      </div>
    </Container>
  )
}

export default LecturesListContent
