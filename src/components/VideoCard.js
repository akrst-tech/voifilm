import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const VideoCardWrapper = styled.div`
  width: 100%;
  height: 35vw;
  background: green;
  margin-bottom: 4%;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hover-link {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    text-align: center;
    width: 80%;
    font-weight: 400;
  }
  :hover {
    cursor: pointer;
    .hover-link {
      opacity: 0.6;
    }
  }
  @media screen and (min-width: 800px) {
    width: 48%;
    height: 18vw;
    max-height: 200px;
  }
`

const VideoCard = ({ video }) => {
  const { title, slug, thumbnail } = video

  return (
    <VideoCardWrapper>
      <Img className="image" fluid={thumbnail.fluid} />
      <Link className="hover-link" to={`/videos/${slug}`}>
        <h3 className="title">{title}</h3>
      </Link>
    </VideoCardWrapper>
  )
}

export default VideoCard
