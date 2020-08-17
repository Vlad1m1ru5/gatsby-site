import React from 'react'
import styled from '@emotion/styled'

const MainLayout: React.FunctionComponent = ({ children }) => (
  <Main>
    {children}
  </Main>
)

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
`

export default MainLayout