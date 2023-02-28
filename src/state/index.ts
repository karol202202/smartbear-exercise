import { ApiResponse } from 'model/ApiResponse'
import { Definition } from 'model/Definition'
import { Info } from 'model/Info'
import { Path } from 'model/Path'
import { Tag } from 'model/Tag'
import { create } from 'zustand'

interface AppState {
  info: Info | null
  paths: Path | null
  tags: Tag[]
  definitions: Definition | null
  isFetching: boolean
  url: string
  setIsFetching: (requestState: boolean) => void
  loadState: (apiResponse: ApiResponse) => void
}

export const useAppState = create<AppState>((set) => ({
  info: null,
  paths: null,
  tags: [],
  definitions: null,
  isFetching: true,
  url: '',
  setIsFetching: (requestState: boolean) =>
    set(() => ({
      isFetching: requestState,
    })),
  loadState: (apiResponse: ApiResponse) =>
    set(() => ({
      info: apiResponse.info,
      paths: apiResponse.paths,
      definitions: apiResponse.definitions,
      url: `${apiResponse.host}${apiResponse.basePath}`,
      tags: apiResponse.tags,
    })),
}))
