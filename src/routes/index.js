import BookRoom from "../Pages/BookRoom";
import Dashboard from "../Pages/Dashboard";
import LayoutDefault from "../Pages/Layout/LayoutDefault/LayoutDefault";
import Room from "../Pages/Room";
import Setting from "../Pages/Setting";
import CreateRoom from "../components/CreateRoom";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                index: true ,
                element: <Dashboard/>
            },
            {
                path : "/book-room",
                element: <BookRoom/>
            },
            {
                path : "/room",
                element: <Room/>,
                
            },
            {
                path: "/create-room",
                element: <CreateRoom/>
            },
            {
                path: "/setting",
                element: <Setting/>
            },
        ]
    }
]