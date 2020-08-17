import React from 'react'
import styled from '@emotion/styled'

const ShowcaseLayout: React.FunctionComponent = ({ children }) => {
  
  const childrenList = Array.from(children as React.ReactNodeArray)

  const getItem = (children: React.ReactNode, index: number) => (
    <Item key={index}>
      {children}
    </Item>
  )

  return (
    <List>
      {childrenList.map(getItem)}
    </List>
  )
}

const Item = styled.li`
  flex-basis: 0;
  flex-grow: 1;

  @media screen and (max-width: 460px) {
    max-width: 100%;
    min-width: 75%;
  }

  @media screen and (min-width: 460px) {
    max-width: 50%;
    min-width: 40%;
  }

  @media screen and (min-width: 700px) {
    max-width: 30%;
    min-width: 25%;
  }

  @media screen and (min-width: 940px) {
    max-width: 25%;
    min-width: 20%;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  list-style: none;
  padding: 20px;
  margin: 0;

  max-width: 960px;

  & > * {
    margin: 10px;
  }
`

export default ShowcaseLayout
