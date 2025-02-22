import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import HomeLayout from "../view/client/layout/default";
import Error404 from "../view/client/pages/error/Error404";
import HomeScreen from "../view/client/pages/home";
import InfoUser from "../view/client/pages/info/InfoUser";
import Login from "../view/client/pages/login/Login";
import Signup from "../view/client/pages/register/SignUp";
import Register from "../view/client/pages/register/SignUp";


export const routes = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomeScreen/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "sign-up",
                element: <Signup/>
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <Error404 />
    }
];
