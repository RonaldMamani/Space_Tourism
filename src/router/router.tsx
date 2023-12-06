import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Crew from '../pages/Crew'
import Destination from '../pages/Destination'
import Technology from '../pages/Technology'
import Moon from '../pages/Moon'
import Mars from '../pages/Mars'
import Europa from '../pages/Europa'
import Titan from '../pages/Titan'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/destination",
        element: <Destination />,
        children: ([
            {
                index: true,
                element: <Moon />
            },
            {
                path: "mars",
                element: <Mars />
            },
            {
                path: "europa",
                element: <Europa />
            },
            {
                path: "titan",
                element: <Titan />
            },
        ])
    },
    {
        path: "/crew",
        element: <Crew />
    },
    {
        path: "/technology",
        element: <Technology />
    },
])

export default router