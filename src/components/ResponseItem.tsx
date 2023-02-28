import { Response } from "model/Response"
import { useAppState } from "../state"

interface ResponseItemProps {
    response: Response
  }
  
export function ResponseItem({ response }: ResponseItemProps) {
    const definitions = useAppState((state) => state.definitions)
  
    function findDefinition(path: string) {
      const parsedPath = path.split('/')
      return definitions![parsedPath[parsedPath.length - 1]]
    }
  
    function formatSchema(schema: any) {
      Object.keys(schema).forEach((index) => {
        if (index === '$ref') {
          const definition = findDefinition(schema[index])
          delete schema[index]
          for (const key in definition) {
            if (definition.hasOwnProperty(key)) {
              schema[key] = definition[key]
            }
          }
        }
        if (typeof schema[index] === 'object') {
          formatSchema(schema[index])
        }
      })
      return schema
    }
  
    return (
      <div>
        <div>Description</div>
        <p>{response.description}</p>
        {response.schema && (
          <textarea
            className='form-textarea rounded-md
            border-gray-300
            shadow-sm
            focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            defaultValue={JSON.stringify(formatSchema(response.schema), undefined, 2)}
            rows={25}
            cols={55}
          />
        )}
      </div>
    )
  }