import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import FooterLayout from 'layouts/footer'
import ShowcaseLayout from 'layouts/showcase'
import DocumentCard from 'components/document-card'
import GlobalStyles from 'components/global-styles'

const IndexPage: FunctionComponent = ({ data }) => {

  const getListItem = ({ title, date }, index) => (
    <li key={index}>
      <DocumentCard header={title} footer={date} />
    </li>
  )

  return (
    <MetaLayout>
      <HeaderLayout>
        <FooterLayout>
          <ShowcaseLayout>
            {data.allMarkdownRemark.nodes
              .map(({ frontmatter }) => frontmatter)
              .map(getListItem)
            }
          </ShowcaseLayout>
        </FooterLayout>
      </HeaderLayout>
      <GlobalStyles />
    </MetaLayout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
        }
      }
    }
  }
`

export default IndexPage
