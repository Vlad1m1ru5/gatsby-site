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
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  list-style: none;
  padding: 20px;
  margin: 0;

  & > * {
    margin: 10px;
  }
`

export default ShowcaseLayout
