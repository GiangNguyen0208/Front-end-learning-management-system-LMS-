import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import HomeLayout from "../view/client/layout/default";
import Categories from "../view/client/pages/categories/CourseList";
import Checkout from "../view/client/pages/checkout/Checkout";
import CourseHeader from "../view/client/pages/course";
import CourseViewer from "../view/client/pages/course-viewer/CourseViewer";
import Error404 from "../view/client/pages/error/Error404";
import HomeScreen from "../view/client/pages/home";
import InfoUser from "../view/client/pages/info/InfoUser";
import Login from "../view/client/pages/login/Login";
import OrderComplete from "../view/client/pages/order-complete/OrderComplete";
import Signup from "../view/client/pages/register/SignUp";
import ShoppingCart from "../view/client/pages/shopping-cart/ShoppingCart";


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
                path: "categories",
                element: <Categories/>
            },
            {
                path: "course",
                element: <CourseHeader/>
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart/>,
            },
            {
                path: "check-out",
                element: <Checkout/>
            },
            {
                path: "order-complete",
                element: <OrderComplete/>
            },
            {
                path: "course-viewer",
                element: <CourseViewer/>
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
