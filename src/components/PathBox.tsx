import { Link } from 'react-router-dom'
import { useAppState } from '../state'
import { HttpMethodBox } from './HttpMethodBox'
import { ReactComponent as External } from '../static/external.svg'
import { RequestMethodEnum } from 'model/RequestMethodEnum'
import { Request } from 'model/Request'

interface PathBoxProps {
  request: Request
  pathName: string
  hasLink?: boolean
}

export function PathBox({ request, pathName, hasLink = true }: PathBoxProps) {
  const url = useAppState((state) => state.url)

  return (
    <div>
      <div className='flex items-center'>
        <h1 className='text-3xl'>{pathName}</h1>
        {hasLink && (
          <Link
            className='ml-2'
            to={`singlePath?path=${encodeURIComponent(pathName)}`}
          >
            <External />
          </Link>
        )}
      </div>
      {Object.keys(request).map((httpMethod, index) => (
        <HttpMethodBox
          key={index}
          url={`${url}${pathName}`}
          requestMethodName={httpMethod as RequestMethodEnum}
          requestObject={request[httpMethod as RequestMethodEnum]}
        />
      ))}
    </div>
  )
}
