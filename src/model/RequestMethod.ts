import { Parameter } from './Parameter'
import { Response } from './Response'

export interface RequestObject {
  tags: string[]
  summary: string
  description: string
  operationId: string
  consumes?: string[]
  produces?: string[]
  parameters: Parameter[]
  responses: Record<string, Response>
  security?: Security[]
}

interface Security {
  petstore_auth: string[]
}
