import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import SubHead from './components/SubHeader'
import Content from './Content'
import { Segment } from '../interfaces/segment'

interface StaticIndexProps {
  segments: Segment[]
}
const IndexPage = () => (
  <div>Hellor world++++??</div>
)

export default IndexPage
