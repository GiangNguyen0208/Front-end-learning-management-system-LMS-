import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import HomeLayout from "../view/client/layout/default";
import Categories from "../view/client/pages/categories/CourseList";
import Checkout from "../view/client/pages/checkout/Checkout";
import CourseHeader from "../view/client/pages/course";
import CourseViewer from "../view/client/pages/course-viewer/CourseViewer";
import Error404 from "../view/client/pages/error/Error404";
import HomeScreen from "../view/client/pages/home";
import InstructorInfo from "../view/client/pages/instructor-info";
import Login from "../view/client/pages/login/Login";
import OrderComplete from "../view/client/pages/order-complete/OrderComplete";
import Infomation from "../view/client/pages/profile";
import Signup from "../view/client/pages/register/SignUp";
import ShoppingCart from "../view/client/pages/shopping-cart/ShoppingCart";


export const routes = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                title: "Home",
                element: <HomeScreen/>
            },
            {
                path: "login",
                title: "Đăng nhập",
                element: <Login/>
            },
            {
                path: "sign-up",
                title: "Đăng ký",
                element: <Signup/>
            },
            {
                path: "categories",
                title: "Danh mục",
                element: <Categories/>
            },
            {
                path: "course",
                title: "Khóa học",
                element: <CourseHeader/>
            },
            {
                path: "shopping-cart",
                title: "Giỏ hàng",
                element: <ShoppingCart/>,
            },
            {
                path: "check-out",
                title: "Thanh toán",
                element: <Checkout/>
            },
            {
                path: "order-complete",
                title: "Thanh toán thành công",
                element: <OrderComplete/>
            },
            {
                path: "course-viewer",
                title: "Xem khóa học",
                element: <CourseViewer/>
            },
            {
                path: "instructor-info",
                title: "Thông tin giảng viên",
                element: <InstructorInfo />
            },
            {
                path: "info-user",
                title: "Thông tin người dùng",
                element: <Infomation />,
            },
            // {
            //     element: <PrivateRouter />,
            //     children: [
            //         {
            //             path: "info-user",
            //             title: "Thông tin người dùng",
            //             element: <In />
            //         }
            //     ]
            // }
        ]
    },
    {
        path: "*",
        title: "Not Found 404",
        element: <Error404 />
    }
];
