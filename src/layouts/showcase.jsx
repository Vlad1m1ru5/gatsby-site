import React from "react"
import styled from "@emotion/styled"

const ShowcaseLayout = ({ children }) => (
  <List>
    {children}
  </List>
)

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  list-style: none;
  padding: 0;
`

export default ShowcaseLayout
