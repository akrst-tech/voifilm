import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import VideoCard from "./VideoCard"

const VideoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const getVideos = graphql`
  query {
    videos: allContentfulVoifilmVideoPage(
      sort: { order: DESC, fields: published }
    ) {
      edges {
        node {
          title
          slug
          published
          featured
          type
          contentful_id
          youTubeEmbed {
            youTubeEmbed
          }
          thumbnail {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const VideoCards = () => {
  const response = useStaticQuery(getVideos)
  const videos = response.videos.edges

  const videosNum = videos.length
  // const supCard = videosNum % 2 === 0 ? null : <div />

  return (
    <VideoCardsContainer>
      {videos.map(({ node }) => {
        return <VideoCard key={node.contentful_id} video={node} />
      })}
      {videosNum % 2 === 0 ? null : <div />}
    </VideoCardsContainer>
  )
}

export default VideoCards
