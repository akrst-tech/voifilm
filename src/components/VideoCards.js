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

// const getVideos = graphql`
//   query {
//     videos: allContentfulVoifilmVideoPage(
//       sort: { order: DESC, fields: published }
//     ) {
//       totalCount
//       edges {
//         node {
//           title
//           slug
//           published
//           featured
//           type
//           contentful_id
//           youTubeEmbed {
//             youTubeEmbed
//           }
//           thumbnail {
//             fluid(maxWidth: 800) {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const getFeatured = graphql`
//   query {
//     featured: allContentfulVoifilmVideoPage(
//       filter: { featured: { eq: true } }
//       sort: { order: DESC, fields: published }
//     ) {
//       edges {
//         node {
//           title
//           slug
//           contentful_id
//           thumbnail {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const getVideos = graphql`
//   query {
//     videos: allContentfulVoifilmVideoPage(
//       # filter: { featured: { eq: false } }
//       sort: { order: DESC, fields: published }
//     ) {
//       edges {
//         node {
//           title
//           slug
//           contentful_id
//           featured
//           thumbnail {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

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
  // const responseFeatured = useStaticQuery(getFeatured)
  const response = useStaticQuery(getVideos)

  // const featuredVideos = responseFeatured.featured.edges
  // const videos = response.videos.edges
  const videos = response.videoGallery.videoGallery

  const videosNum = videos.length
  // featuredVideos.length +
  // const supCard = videosNum % 2 === 0 ? null : <div />

  // const featured = videos.filter(({ node }) => {
  //   return node.featured
  // })
  // const unfeatured = videos.filter(({ node }) => {
  //   return !node.featured
  // })

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

// {
//   videos.map(({ node }) => {
//     return <VideoCard key={node.contentful_id} video={node} />
//   })
// }
// {
//   featuredVideos.map(({ node }) => {
//     return <VideoCard key={node.contentful_id} video={node} />
//   })
// }

// {
//   featured.map(({ node }) => {
//     return <VideoCard key={node.contentful_id} video={node} />
//   })
// }
// {
//   unfeatured.map(({ node }) => {
//     return <VideoCard key={node.contentful_id} video={node} />
//   })
// }
