export interface Tag {
  name: string
  description: string
  externalDocs: ExternalDocs
}

interface ExternalDocs {
  description: string
  url: string
}
