import Layout from "../layout/Layout";
import SignUp from "../auth/signUp";
import Login from "../auth/login";
import ProductDetailsPage from "../pages/ProductDetailsPage"
import HomePage from "../pages/Homepage/HomePage";
import DetailsPage from "../pages/DetailsPage";
import ReviewPage from "../pages/ReviewPage";
import CartPage from "../pages/CartPage"

const ROUTES = [

    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/signup",
                element:<SignUp/>
            },

            {
                path: "/productDetails",
                element:<ProductDetailsPage/>
            },
            
            {
                path: "/",
                element:<Login/>
            },
           
            {
                path: "/login",
                element:<Login/>
            },
            // {
            //     path: "/commerce",
            //     element:<Layout/>
            // },
            {
                path:"/home",
                element:<HomePage/>
            },
            {
                path:"/details",
                element:<DetailsPage/>
            },
            {
                path:"/review",
                element:<ReviewPage/>
            },
            {
                path:"/cart",
                element:<CartPage/>
            },
            
        ]
    },
]
export default ROUTES;