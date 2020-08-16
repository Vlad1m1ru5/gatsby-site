import React from "react"
import { graphql } from "gatsby"
import HeaderLayout from "layouts/header"
import FooterLayout from "layouts/footer"
import MetaLayout from "layouts/meta"
import DocumentCard from "components/document-card"

const IndexPage = ({ data }) => {

  const getListItem = ({ title, date }, index) => (
    <li key={index}>
      <DocumentCard header={title} footer={date} />
    </li>
  )

  return (
    <MetaLayout>
      <HeaderLayout>
        <FooterLayout>
          <p>Hello world</p>
          <ul>
            {data.allMarkdownRemark.nodes
              .map(({ frontmatter }) => frontmatter)
              .map(getListItem)
            }
          </ul>
        </FooterLayout>
      </HeaderLayout>
    </MetaLayout>
  )
}

export const querty = graphql`
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
