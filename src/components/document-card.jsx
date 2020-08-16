import React from "react"

const DocumentCard = ({
  header,
  text,
  footer
}) => (
  <section>
    <h3>{header}</h3>
    <span>{text}</span>
    <small>{footer}</small>
  </section>  
)

export default DocumentCard
