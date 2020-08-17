import React, { useState } from 'react'
import styled from '@emotion/styled'

const NavigationLayout: React.FunctionComponent = ({ children }) => {

  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false)
  
  const openNavigation = () => { setIsVisibleNavigation(true) }

  const closeNavigation = () => { setIsVisibleNavigation(false) }

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
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
          <li>Пункт 4</li>
          <li>Пункт 5</li>
          <li>Пункт 6</li>
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
