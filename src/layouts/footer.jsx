import React from "react"
import styled from "@emotion/styled"

const FooterPage = ({ children }) => (
  <>
    {children}
    <Footer>
      <h2>This footer is displayed on every page.</h2>
    </Footer>
  </>
)

const Footer = styled.footer`
  
  bottom: 0;
`

export default FooterPage
