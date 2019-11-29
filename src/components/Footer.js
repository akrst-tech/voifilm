import React from "react"
import styled from "styled-components"

const FooterContent = styled.footer`
  margin-top: auto;
  padding: 1rem 0;
  text-align: left;
  font-size: small;
`

export default function Footer() {
  return (
    <FooterContent>
      © {new Date().getFullYear()} VOIFILM all rights reserved.
    </FooterContent>
  )
}
