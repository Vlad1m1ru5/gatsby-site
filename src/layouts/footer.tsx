import React from 'react'

const FooterPage: React.FunctionComponent = ({ children }) => (
  <>
    {children}
    <footer>
      <h2>This footer is displayed on every page.</h2>
    </footer>
  </>
)

export default FooterPage
