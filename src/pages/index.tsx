import React from 'react'
import { graphql } from 'gatsby'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import FooterLayout from 'layouts/footer'
import ShowcaseLayout from 'layouts/showcase'
import DocumentCard from 'components/document-card'
import GlobalStyles from 'components/global-styles'

interface IFrontmatter {
  title: string
  date: string
}

interface INode {
  frontmatter: IFrontmatter
}

interface IProps {
  data: {
    allMarkdownRemark: {
      nodes: INode[]
    }
  }
}

const IndexPage: React.FunctionComponent<IProps> = ({ data }) => {

  const getFrontmatter = ({ frontmatter }: INode) => frontmatter

  const getDocumentCard = ({ title, date }: IFrontmatter, index: number) => (
    <DocumentCard
      key={index}
      header={title}
      footer={date}
    />
  )

  const getListItem = (children: React.ReactElement, index: number) => (
    <li key={index}>
      {children}
    </li>
  )

  return (
    <MetaLayout>
      <HeaderLayout>
        <FooterLayout>
          <ShowcaseLayout>
            {data.allMarkdownRemark.nodes
              .map(getFrontmatter)
              .map(getDocumentCard)
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
