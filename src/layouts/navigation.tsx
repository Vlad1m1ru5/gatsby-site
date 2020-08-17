import React, { useState } from 'react'
import styled from '@emotion/styled'

const NavigationLayout: React.FunctionComponent = ({ children }) => (
  <>
    <Navigation>
      <h2>Навигация</h2>
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
        <li>Пункт 4</li>
        <li>Пункт 5</li>
        <li>Пункт 6</li>
      </ul>
    </Navigation>
    {children}
  </>
)

const Navigation = styled.section`
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19),
              0 6px 6px rgba(0,0,0,0.23);
`

export default NavigationLayout
