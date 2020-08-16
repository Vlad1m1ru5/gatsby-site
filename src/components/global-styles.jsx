import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => {
  
  const globalStyles = css`
    body: {
      margin: 0;
    }
  `

  return (
    <Global styles={globalStyles} />
  )
}

export default GlobalStyles
