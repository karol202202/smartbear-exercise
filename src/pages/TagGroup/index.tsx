import { useAppState } from '../../state'
import { shallow } from 'zustand/shallow'
import { TagBox, TagRequestMethods } from 'pages/TagGroup/components/TagBox'
import { Tag } from 'model/Tag'
import { Skeleton } from 'components/Skeleton'
import { Path } from 'model/Path'
import { useEffect, useState } from 'react'
import { Request } from 'model/Request'

export function TagGroupPage() {
  const [tags, paths, isFetching] = useAppState(({ tags, paths, isFetching }) => [tags, paths, isFetching], shallow)

  const [httpMethodsArray, setHttpMethodsArray] = useState<TagRequestMethods[]>([])

  useEffect(() => {
    if (paths) {
      setHttpMethodsArray(getHttpMethods(paths))
    }
  }, [paths])

  return (
    <div>
      {isFetching ? (
        <Skeleton />
      ) : (
        <>
          {tags.map((tag: Tag, index: number) => (
            <TagBox
              key={index}
              tag={tag}
              requestMethods={httpMethodsArray.filter((path) => path.tags[0] === tag.name)}
            />
          ))}
        </>
      )}
    </div>
  )
}

function getHttpMethods(paths: Path): TagRequestMethods[] {
  const result = []
  for (const pathKey in paths) {
    if (paths.hasOwnProperty(pathKey)) {
      const httpMethods = paths[pathKey]
      for (const httpMethodsKey in httpMethods) {
        if (httpMethods.hasOwnProperty(httpMethodsKey)) {
          const httpMethod = httpMethods[httpMethodsKey as keyof Request]
          result.push({ ...httpMethod, path: pathKey, methodName: httpMethodsKey } as TagRequestMethods)
        }
      }
    }
  }
  return result
}
