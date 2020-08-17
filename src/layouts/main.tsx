import React from 'react'
import { css } from '@emotion/core'

const MainLayout: React.FunctionComponent = ({ children }) => (
  <main css={mainCss}>
    {children}
  </main>
)

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default MainLayout