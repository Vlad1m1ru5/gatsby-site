import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => {
  
  const globalStyles = css`
    body {
      margin: 0;

      font-family: Arial, Helvetica, sans-serif;
    }
  `

  return (
    <Global styles={globalStyles} />
  )
}

export default GlobalStyles
