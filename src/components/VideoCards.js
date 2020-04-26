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
    videoGallery: contentfulVideoGallery(title: { eq: "Video Gallery" }) {
      title
      videoGallery {
        __typename
        ... on ContentfulVideo {
          id
          title
          slug
          embedUrl {
            embedUrl
          }
          coverImage {
            id
            title
            fluid(maxWidth: 500, quality: 100) {
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

  const videos = response.videoGallery.videoGallery

  const videosNum = videos.length

  return (
    <VideoCardsContainer>
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {videosNum % 2 === 0 ? null : <div />}
    </VideoCardsContainer>
  )
}

export default VideoCards
