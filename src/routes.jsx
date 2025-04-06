import App from "./App";
import ErrorPage from "./components/ErrorPage";
// import { element } from "prop-types";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "cart",
        element: <Cart/>
    },
    {
        path: "shop",
        element: <Shop/>
    }
]

export default routes;