import React from 'react'
import { graphql } from 'gatsby'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import FooterLayout from 'layouts/footer'
import ShowcaseLayout from 'layouts/showcase'
import DocumentCard from 'components/document-card'
import GlobalStyles from 'components/global-styles'
import MainLayout from 'layouts/main'

interface IFrontmatter {
  title: string
  date: string
  description: string
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

  const getDocumentCard = (
    {
      title,
      date,
      description
    }: IFrontmatter,
    index: number
  ) => (
    <DocumentCard
      key={index}
      header={title}
      text={description}
      footer={date}
    />
  )

  return (
    <MetaLayout>
      <HeaderLayout>
        <FooterLayout>
          <MainLayout>
            <ShowcaseLayout>
              {data.allMarkdownRemark.nodes
                .map(getFrontmatter)
                .map(getDocumentCard)
              }
            </ShowcaseLayout>
          </MainLayout>
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
          description
        }
      }
    }
  }
`

export default IndexPage
