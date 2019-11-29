import React from "react"
import styled from "styled-components"

import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import "./layout.css"

const NavBarContent = styled.div`
  /* display: block; */
`

const NavBar = () => {
  return (
    <NavBarContent>
      <MobileNav />
      <DesktopNav />
    </NavBarContent>
  )
}

export default NavBar
