import React, { useState } from "react"
import styled from "styled-components"

import NavLinks from "./NavLinks"

const MobileNavContent = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const HumbergerButton = styled.div`
  display: block;
  position: absolute;
  top: 40px;
  right: 5vw;
  z-index: 100;
  :hover {
    cursor: pointer;
  }
  &.showNav {
    position: fixed;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const ButtonLine = styled.div`
  width: 30px;
  height: 3px;
  padding: 0;
  margin: 7px 0;
  background: white;
  &.showNav {
    background: black;
  }
`

const MobileNavOverlay = styled.div`
  background: white;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  z-index: 10;
  opacity: 0;
  transition: all 0.5 ease;
  &.showNav {
    display: block;
    width: 50vw;
    opacity: 0.8;
  }
`

const MobileNav = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const navState = isOpen ? "showNav" : ""

  return (
    <MobileNavContent>
      <HumbergerButton onClick={toggleNav} className={navState}>
        <ButtonLine className={navState}></ButtonLine>
        <ButtonLine className={navState}></ButtonLine>
        <ButtonLine className={navState}></ButtonLine>
      </HumbergerButton>
      <MobileNavOverlay className={navState}>
        <NavLinks />
      </MobileNavOverlay>
    </MobileNavContent>
  )
}

export default MobileNav
