import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContent = styled.header`
  width: 100%;
  padding: 40px 0;
  h1 {
    font-weight: 500;
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
