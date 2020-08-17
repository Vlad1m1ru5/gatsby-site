import React from 'react'
import { graphql } from 'gatsby'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import NavigationLayout from 'layouts/navigation'
import FooterLayout from 'layouts/footer'
import MainLayout from 'layouts/main'
import GlobalStyles from 'components/global-styles'

interface IProps {
  data: {
    markdownRemark: INode
  }
}

const DocumentsPage: React.FunctionComponent<IProps> = ({
  data: {
    markdownRemark: {
      frontmatter,
      html
    }
  }
}) => (
  <MetaLayout>
    <HeaderLayout>
      <NavigationLayout>
        <FooterLayout>
          <MainLayout>
            <h3>{frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </MainLayout>
        </FooterLayout>
      </NavigationLayout>
    </HeaderLayout>
    <GlobalStyles />
  </MetaLayout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default DocumentsPage