import React from 'react'
import { css } from '@emotion/core'

interface IProps {
  header?: string
  text?: string
  footer?: string
}

const DocumentCard: React.FunctionComponent<IProps> = ({
  header = '',
  text = '',
  footer = ''
}) => (
  <section css={documentCardCss}>
    <h3>{header}</h3>
    <span>{text}</span>
    <small>{footer}</small>
  </section>  
)

const documentCardCss = css`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;

  & > h3 {
    margin-top: 0;
  }
`

export default DocumentCard
