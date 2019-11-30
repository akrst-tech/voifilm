import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLinksContainer = styled.ul`
  padding: 0;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    margin-top: 0px;
    flex-direction: row;
  }
`

const NavLink = styled.li`
  text-align: right;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-size: 1.2rem;
  letter-spacing: 2px;
  list-style: none;
  .nav-link {
    color: black;
    :hover {
      color: var(--grey);
    }
  }
  @media screen and (min-width: 800px) {
    text-align: left;
    font-size: 1rem;
    letter-spacing: 3px;
    margin: 0 20px 0 0;
    .nav-link {
      color: white;
      :hover {
        color: var(--grey);
      }
    }
  }
`

const NavLinks = ({ device }) => {
  return (
    <NavLinksContainer className={device}>
      <NavLink>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </NavLink>
      <NavLink>
        <a
          href="https://www.instagram.com/vonie_key/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Instagram
        </a>
      </NavLink>
      <NavLink>
        <a
          href="https://www.youtube.com/channel/UCGiO44gBNi2OhIoaUicnMXA"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          YouTube
        </a>
      </NavLink>
      <NavLink>
        <a href="mailto:ky.32012.voilf@gmail.com" className="nav-link">
          Email
        </a>
      </NavLink>
    </NavLinksContainer>
  )
}

export default NavLinks
