import { useState } from 'react'
import { RequestObject } from 'model/RequestMethod'
import { RequestMethodEnum } from 'model/RequestMethodEnum'
import { ParametersForm } from 'components/ParametersForm'
import { ResponsesBox } from 'components/ResponsesBox'
import { Tag } from 'components/Tag'
import { ReactComponent as Caret } from '../static/caret.svg'

export interface HttpMethodBoxProps {
  requestObject: RequestObject
  requestMethodName: RequestMethodEnum
  url: string
}

export function HttpMethodBox({ requestObject, requestMethodName, url }: HttpMethodBoxProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function selectBackground() {
    const background = {
      [RequestMethodEnum.POST]: 'bg-green-100',
      [RequestMethodEnum.PUT]: 'bg-blue-100',
      [RequestMethodEnum.GET]: 'bg-orange-100',
      [RequestMethodEnum.DELETE]: 'bg-red-100',
      default: 'bg-slate-100',
    }

    return background[requestMethodName] || background['default']
  }

  return (
    <div
      data-testid='method-box'
      className={['rounded-xl p-8 my-2', selectBackground()].join(' ')}
    >
      <div className='flex justify-between   '>
        <div className='flex gap-1 items-center'>
          <span className='text-2xl font-bold'>{requestMethodName.toUpperCase()}</span>
          <h2 className='text-2xl'>{url}</h2>
          <div>
            {requestObject.tags.map((tag) => (
              <Tag
                key={tag}
                name={tag}
              />
            ))}
          </div>
        </div>
        <div className='flex'>
          <p>{requestObject.summary}</p>
          <Caret
            data-testid='collapse-icon'
            className={['transition-transform cursor-pointer', isCollapsed ? 'rotate-180' : ''].join(' ')}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>
      </div>
      {isCollapsed && (
        <div className='my-8 flex gap-8'>
          <div className='w-1/2 p-8'>
            <ParametersForm parameters={requestObject.parameters} />
          </div>
          <div className='w-1/2 p-8'>
            <ResponsesBox responses={requestObject.responses} />
          </div>
        </div>
      )}
    </div>
  )
}
