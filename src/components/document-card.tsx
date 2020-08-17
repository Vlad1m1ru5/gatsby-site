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
  padding: 10px;

  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
              0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    cursor: pointer;

    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22);
  }

  & > h3 {
    margin-top: 0;
  }
`

export default DocumentCard
