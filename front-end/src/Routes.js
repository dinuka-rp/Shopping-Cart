import HomeShop from "./views/HomeShop.jsx";
import Login from "./views/login.jsx";
import Register from "./views/register.jsx";

// All the routes in the application are defined here

const Routes = [
    { name: 'HomeShop', path: '/', Component: HomeShop },
    { name: 'Login', path: '/login', Component: Login },
    { name: 'Register', path: '/sign-up', Component: Register }
];

export default Routes;
