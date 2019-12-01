import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContent = styled.header`
  width: 100%;
  padding: 20px 0 40px;
  @media screen and (min-width: 800px) {
    padding: 40px 0;
  }
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    @media screen and (min-width: 800px) {
      font-size: 1.8rem;
    }
  }
`

const Header = () => (
  <HeaderContent>
    <Link to="/">
      <h1>VOIFILM</h1>
    </Link>
  </HeaderContent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
