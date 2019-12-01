import React from "react"
import styled from "styled-components"

const FooterContent = styled.footer`
  margin-top: auto;
  padding: 0.5rem 0;
  text-align: left;
  font-size: small;
  letter-spacing: 2px;
  color: darkgrey;
`

export default function Footer() {
  return (
    <FooterContent>
      © {new Date().getFullYear()} VOIFILM all rights reserved.
    </FooterContent>
  )
}
