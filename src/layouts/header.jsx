import React from "react"
import styled from "@emotion/styled"

const HeaderLayout = ({ children }) => (
  <>
    <Header>
      <h1>This header is displayed on every page</h1>
    </Header>
    {children}
  </>
)

const Header = styled.header`
  position: sticky;
  top: 0;
`

export default HeaderLayout
