import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import Error404 from "../view/client/pages/error/Error404";
import HomeScreen from "../view/client/pages/home";
import InfoUser from "../view/client/pages/info/InfoUser";
import Login from "../view/client/pages/login";


export const routes = [
    {
        path: "/",
        element: <HomeScreen/>,
        children: [
            {
                path: "/",
                element: <HomeScreen/>
            },
            {
                path: "*",
                element: <Error404/>
            },
            // {
            //     path: "blog",
            //     element: <Blog/>,
            //     children: [
            //         {
            //             index: true,
            //             element: <BlogAll/>
            //         },
            //         {
            //             path: "news",
            //             element: <BlogNews/>
            //         },
            //         {
            //             path: "related",
            //             element: <BlogRelated/>
            //         },
            //         {
            //             path: ":id",
            //             element: <BlogDetail/>
            //         },
            //     ]
            // },
            {
                element: <PrivateRouter/>,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser/>
                    }
                ]
            }

        ]
    }
];