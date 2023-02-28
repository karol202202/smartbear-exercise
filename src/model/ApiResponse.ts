import { Definition } from './Definition'
import { Info } from './Info'
import { Path } from './Path'
import { Tag } from './Tag'

export interface ApiResponse {
  info: Info
  paths: Path
  definitions: Definition
  host: string
  basePath: string
  tags: Tag[]
}
