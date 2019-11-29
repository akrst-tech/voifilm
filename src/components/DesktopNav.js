import React from "react"
import styled from "styled-components"

import NavLinks from "./NavLinks"

const DesktopNavContent = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }
`

const DesktopNav = () => {
  return (
    <DesktopNavContent>
      <NavLinks />
    </DesktopNavContent>
  )
}

export default DesktopNav
