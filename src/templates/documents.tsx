import React from 'react'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import NavigationLayout from 'layouts/navigation'
import FooterLayout from 'layouts/footer'
import MainLayout from 'layouts/main'
import GlobalStyles from 'components/global-styles'

const DocumentsPage = () => (
  <MetaLayout>
    <HeaderLayout>
      <NavigationLayout>
        <FooterLayout>
          <MainLayout>
            Text
          </MainLayout>
        </FooterLayout>
      </NavigationLayout>
    </HeaderLayout>
    <GlobalStyles />
  </MetaLayout>
)

export default DocumentsPage