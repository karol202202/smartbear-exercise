import { InfoBox } from 'pages/PathGroup/components/InfoBox'
import { PathBox } from 'components/PathBox'
import { useEffect, useState } from 'react'
import { useAppState } from '../../state'
import { shallow } from 'zustand/shallow'
import { Header } from 'components/Header'
import { Skeleton } from 'components/Skeleton'
import { RequestMethodEnum } from 'model/RequestMethodEnum'

export function PathGroupPage() {
  const [info, paths, isFetching] = useAppState(
    ({ info, paths, isFetching }) => [info, paths, isFetching],
    shallow
  )

  return (
    <div>
      {isFetching ? (
        <Skeleton />
      ) : (
        <>
          {info && <InfoBox info={info} />}
          {paths &&
            Object.keys(paths).map((singlePath) => (
              <PathBox
                key={singlePath}
                pathName={singlePath as RequestMethodEnum}
                request={paths[singlePath as RequestMethodEnum]}
              />
            ))}
        </>
      )}
    </div>
  )
}
