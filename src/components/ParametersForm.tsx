import { Parameter } from 'model/Parameter'

interface ParametersFormProps {
  parameters: Parameter[]
}

export function ParametersForm({ parameters }: ParametersFormProps) {
  return (
    <div>
      <h2 className='text-2xl'>Parameters</h2>
      <form>
        {parameters.map((parameter) => (
          <div
            key={parameter.name}
            className='flex justify-between my-4'
          >
            <label htmlFor={parameter.name}>{parameter.description}</label>
            <input
              className="rounded form-input rounded-md
              border-gray-300
              shadow-sm
              focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'"
              type={parameter.type}
              required={parameter.required}
              id={parameter.name}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
