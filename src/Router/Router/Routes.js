import Main from '../../Layouts/Main';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Blog from '../../components/Blog/Blog';

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])