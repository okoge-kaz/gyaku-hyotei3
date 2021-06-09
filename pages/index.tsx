import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1> Hello Next.js ++++</h1>
  </Layout>
)

export default IndexPage
