export interface ShortContent {
  raw: string
}
export interface Content {
  raw: string
}

export interface BlogNodeData {
  id: string
  createdAt: string
  title: string[]
  creatorName: string

  creatorId?: string
  isPublic?: boolean
  shortContent?: ShortContent
  content?: Content
}

export interface AllContentfull_T {
  nodes: BlogNodeData[]
}
export type ContentfulData = {
  allContentfulBlogs: AllContentfull_T
}
