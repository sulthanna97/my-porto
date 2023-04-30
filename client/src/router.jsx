import {
    createBrowserRouter
} from "react-router-dom";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Layout from "./components/Layout";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path : '/',
                element: <Home />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
]);

export default router;