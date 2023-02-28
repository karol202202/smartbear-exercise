import { RequestObject } from 'model/RequestMethod'
import { RequestMethodEnum } from 'model/RequestMethodEnum'
import { Tag } from 'model/Tag'
import { HttpMethodBox } from '../../../components/HttpMethodBox'

export type TagRequestMethods = RequestObject & { path: string; methodName: RequestMethodEnum }

interface TagBoxProps {
  tag: Tag
  requestMethods: TagRequestMethods[]
}

export function TagBox({ tag, requestMethods }: TagBoxProps) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl'>{tag.name}</h1>
        <span>{tag.description}</span>
      </div>
      <div>
        {requestMethods.map((requestMethod, index: number) => (
          <HttpMethodBox
            key={index}
            url={`${'url'}${requestMethod.path}`}
            requestMethodName={requestMethod.methodName}
            requestObject={requestMethod}
          />
        ))}
      </div>
    </div>
  )
}
