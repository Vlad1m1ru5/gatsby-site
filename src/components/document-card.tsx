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
}) => {

  const cardStyle = css`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;

    .card__header {
      margin-top: 0;
    }
  `

  return (
    <section className='document-card' css={cardStyle}>
      <h3 className='document-card__header'>{header}</h3>
      <span className='document-card__text'>{text}</span>
      <hr />
      <small className='document-card__footer'>{footer}</small>
    </section>  
  )
}

export default DocumentCard
