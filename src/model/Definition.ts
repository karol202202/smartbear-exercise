export type Definition = Record<string, Property>

type Property = Record<string, { type: string; format?: string }>
