import React from 'react'
import { Helmet } from 'react-helmet'

const MetaLayout = ({ children }) => (
  <>
    <Helmet>
      <title>Gatsby site</title>
    </Helmet>
    {children}
  </>
)

export default MetaLayout