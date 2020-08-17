import React from 'react'
import styled from '@emotion/styled'

const HeaderLayout: React.FunctionComponent  = ({ children }) => (
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

  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16),
              0 3px 6px rgba(0,0,0,0.23);

  padding: 20px;

  & > h1 {
    margin: 0;
  }
`

export default HeaderLayout
