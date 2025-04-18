import App from "./App";
import ErrorPage from "./components/ErrorPage";
// import { element } from "prop-types";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Home from "./components/Home";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "",
                element: <Home />
            }
        ]
    },
]

export default routes;