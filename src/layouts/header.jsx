import React from "react"

const HeaderLayout = ({ children }) => (
  <>
    <header>
      <h1>This header is displayed on every page</h1>
    </header>
    {children}
  </>
)

export default HeaderLayout
