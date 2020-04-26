import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import VideoCards from "../components/VideoCards"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <VideoCards />
  </Layout>
)

// export const query = graphql`
//   query MyQuery {
//     allContentfulVoifilmVideoPage(sort: { order: DESC, fields: published }) {
//       edges {
//         node {
//           title
//           slug
//           published
//           featured
//         }
//       }
//     }
//   }
// `

export default IndexPage
