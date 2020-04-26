import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import VideoCards from "../components/VideoCards"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <VideoCards />
  </Layout>
)

export default IndexPage
