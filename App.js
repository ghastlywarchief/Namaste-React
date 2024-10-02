import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider, useStore } from "react-redux";
import ReduxStore from "./src/utils/ReduxStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {
    return (
        <Provider store={ReduxStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}

const routes = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path: "/restaurants/:resId", 
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
            
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);