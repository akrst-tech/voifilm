import React, { useState } from "react"
import styled from "styled-components"

const HumbergerButton = styled.div`
  display: block;
  position: absolute;
  top: 25px;
  right: 20px;
  :hover {
    cursor: pointer;
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
`

export default function NavButton() {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <HumbergerButton onClick={toggleNav}>
      <ButtonLine className="line"></ButtonLine>
      <ButtonLine className="line"></ButtonLine>
      <ButtonLine className="line"></ButtonLine>
    </HumbergerButton>
  )
}
