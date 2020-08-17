interface IFrontmatter {
  title: string
  date: string
  description: string
}

interface INode {
  id: string
  html: string
  frontmatter: IFrontmatter
  fields: {
    slug: string
  }
}
