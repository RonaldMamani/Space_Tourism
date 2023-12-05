import { createBrowserRouter } from 'react-router-dom'
import { Crew } from '../pages/Crew'
import Home from '../pages/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/crew",
        element: <Crew />
    }
    ])

export default router