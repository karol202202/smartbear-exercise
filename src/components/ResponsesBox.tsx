import { useState } from 'react'
import { Response } from 'model/Response'
import { Button } from './Button'
import { ResponseItem } from './ResponseItem'

interface ResponsesBoxProps {
  responses: Record<string, Response>
}

export function ResponsesBox({ responses }: ResponsesBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(Object.keys(responses)[0])

  return (
    <div>
      <h2 className='text-2xl'>Response</h2>
      {Object.keys(responses).map((responseCode) => (
        <Button
          key={responseCode}
          isActive={responseCode === currentIndex}
          value={responseCode}
          onClick={() => setCurrentIndex(responseCode)}
        />
      ))}
      <ResponseItem response={responses[currentIndex]} />
    </div>
  )
}

