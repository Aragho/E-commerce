import Layout from "../layout/Layout";
import SignUp from "../auth/signup";
import Login from "../auth/login";
import ProductDetailsPage from "../pages/ProductDetailsPage"
import HomePage from "../pages/Homepage/HomePage";
import DetailsPage from "../pages/DetailsPage";
import ReviewPage from "../pages/ReviewPage";

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
        
        ]
    },
]
export default ROUTES;