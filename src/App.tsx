import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAppState } from './state'
import { shallow } from 'zustand/shallow'
import { router } from './router'
import { Header } from 'components/Header'

export function App() {
  const [loadState, setIsFetching] = useAppState(
    ({ loadState, setIsFetching }) => [loadState, setIsFetching],
    shallow
  )

  useEffect(() => {
    setIsFetching(true)
    fetch(`https://petstore.swagger.io/v2/swagger.json`)
      .then((response) => response.json())
      .then((actualData) => {
        loadState(actualData)
      })
      .finally(() => setIsFetching(false))
  }, [])

  return (
    <div>
      <Header />
      <div className='container mx-auto flex flex-col gap-4 justify-between'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
