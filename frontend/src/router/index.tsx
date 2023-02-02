import { createBrowserRouter } from 'react-router-dom'
import App from 'src/pages/App'
import Explore from 'src/pages/Explore'
import Direct from 'src/pages/Direct'
import Profile from 'src/pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/direct/inbox',
    element: <Direct />,
  },
  {
    path: '/*',
    element: <Profile />,
  },
])

export default router
