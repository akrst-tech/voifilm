import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import NavBar from "./NavBar"

import "./layout.css"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
