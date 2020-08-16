import React from "react"
import { graphql } from "gatsby"
import HeaderLayout from "layouts/header"
import FooterLayout from "layouts/footer"

const IndexPage = ({ data }) => {

  const getListItem = ({ title, date }, index) => (
    <li key={index}>
      <section>
        <h3>{title}</h3>
        <span>{date}</span>
      </section>
    </li>
  )

  return (
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
