import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => {
  
  const globalStyles = css`
    body {
      margin: 0;

      font-family: Arial, Helvetica, sans-serif;

      * {
        background-color: white;
        color: black;
      }
    }
  `

  return (
    <Global styles={globalStyles} />
  )
}

export default GlobalStyles
