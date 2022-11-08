import Main from '../../Layouts/Main';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Blog from '../../components/Blog/Blog';
import MenuPage from '../../components/MenuPage/MenuPage';
import Details from '../../components/Details/Details';
import Register from '../../components/Login/Register';

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
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/menu',
                element:<MenuPage></MenuPage>
            },
            {
                path:'/menu/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])