import { PathBox } from 'components/PathBox'
import { Skeleton } from 'components/Skeleton'
import { useSearchParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { useAppState } from '../../state'

export function SinglePathPage() {
  const [params] = useSearchParams()
  const [paths, isFetching] = useAppState(({ paths, isFetching }) => [paths, isFetching], shallow)
  const pathName = params.get('path') || ''

  return (
    <div>
      {isFetching ? (
        <Skeleton />
      ) : (
        <PathBox
          pathName={pathName}
          request={paths![pathName]}
          hasLink={false}
        />
      )}
    </div>
  )
}
