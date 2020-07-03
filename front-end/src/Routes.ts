import Catalog from "./components/Catalog.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

// All the routes in the application are defined here

const Routes = [
    { name: 'HomeShop', path: '/', component: Catalog },
    { name: 'Login', path: '/login', component: Login },
    { name: 'Register', path: '/sign-up', component: Register }
];

export default Routes;
