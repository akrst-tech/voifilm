import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 50px 0;
  .type {
    color: grey;
    letter-spacing: 2px;
    font-size: 0.8rem;
  }
  .title {
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`

const IframeContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;
  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const VideoPageTemplate = ({ data }) => {
  const {
    title,
    type,
    youTubeEmbed: { youTubeEmbed },
  } = data.video

  return (
    <Layout>
      <Wrapper>
        <div className="type">{type}</div>
        <h3 className="title">{title}</h3>
        <IframeContainer dangerouslySetInnerHTML={{ __html: youTubeEmbed }} />
      </Wrapper>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     video: contentfulVoifilmVideoPage(slug: { eq: $slug }) {
//       title
//       type
//       youTubeEmbed {
//         youTubeEmbed
//       }
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    video: contentfulVideo(slug: { eq: $slug }) {
      title
      type
      embedUrl {
        embedUrl
      }
    }
  }
`

export default VideoPageTemplate

// const embed = data.video.videoEmbedCode.json

// const options = {
//   renderNode: {
//     [INLINES.TEXT]: embed => (
//       <div dangerouslySetInnerHTML={{ __html: embed }} />
//     ),
//   },
// }
