import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'

const NavigationLayout: React.FunctionComponent = ({ children }) => {

  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false)
  
  const openNavigation = () => { setIsVisibleNavigation(true) }

  const closeNavigation = () => { setIsVisibleNavigation(false) }

  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const getSlugLink = ({
    id,
    fields: {
      slug
    },
    frontmatter: {
      title
    }
  }: INode) => (
    <Link key={id} to={slug}>{title}</Link>
  )

  const getListItem = (node: React.ReactNode, index: number) => (
    <li key={index}>{node}</li>
  ) 

  return (
    <>
      <Preview isVisible={!isVisibleNavigation}>
        <button onClick={openNavigation}>Открыть</button>
      </Preview>
      <Content isVisible={isVisibleNavigation}>
        <label>
          <button onClick={closeNavigation}>Закрыть</button>
          Навигация
        </label>
        <ul>
          {data.allMarkdownRemark.nodes.map(getSlugLink).map(getListItem)}
        </ul>
      </Content>
      {children}
    </>
  )
}

const Navigation = styled.div<{ isVisible: boolean }>`
  position: fixed;
  
  padding-top: 20px;
  padding-bottom: 20px;

  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
`

const Preview = styled(Navigation)``

const Content = styled(Navigation)`
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19),
              0 6px 6px rgba(0,0,0,0.23);

  @media screen and (max-width: 380px) {
    width: 100%;
  }
`

export default NavigationLayout
