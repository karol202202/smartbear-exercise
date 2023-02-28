import { SinglePathPage } from 'pages/SinglePath'
import { PathGroupPage } from 'pages/PathGroup'
import { TagGroupPage } from 'pages/TagGroup'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PathGroupPage />,
  },
  {
    path: '/singlePath',
    element: <SinglePathPage />,
  },
  {
    path: '/groupedByTag/',
    element: <TagGroupPage />,
  },
])
