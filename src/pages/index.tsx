import React from 'react'
import { graphql, Link } from 'gatsby'
import MetaLayout from 'layouts/meta'
import HeaderLayout from 'layouts/header'
import FooterLayout from 'layouts/footer'
import ShowcaseLayout from 'layouts/showcase'
import DocumentCard from 'components/document-card'
import GlobalStyles from 'components/global-styles'
import MainLayout from 'layouts/main'
import NavigationLayout from 'layouts/navigation'

interface IProps {
  data: {
    allMarkdownRemark: {
      nodes: INode[]
    }
  }
}

const IndexPage: React.FunctionComponent<IProps> = ({ data }) => {

  const getDocumentCardLinkData = ({ frontmatter, id, fields: { slug } }: INode) => ({
    frontmatter,
    id,
    slug
  })

  const getDocumentCardLink = ({
    id,
    slug,
    frontmatter: {
      title,
      date,
      description
    }
  }: {
    id: string,
    slug: string,
    frontmatter: IFrontmatter
  }) => (
    <Link key={id} to={slug}>
      <DocumentCard
        header={title}
        text={description}
        footer={date}
      />
    </Link>
  )

  return (
    <MetaLayout>
      <HeaderLayout>
        <NavigationLayout>
          <FooterLayout>
            <MainLayout>
              <ShowcaseLayout>
                {data.allMarkdownRemark.nodes
                  .map(getDocumentCardLinkData)
                  .map(getDocumentCardLink)
                }
              </ShowcaseLayout>
            </MainLayout>
          </FooterLayout>
        </NavigationLayout>
      </HeaderLayout>
      <GlobalStyles />
    </MetaLayout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
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
