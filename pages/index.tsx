import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import SubHead from './components/SubHeader'
import Content from './Content'
import { Segment } from '../interfaces/segment'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1> Hello Next.js ++++--</h1>
  </Layout>
)

export default IndexPage
