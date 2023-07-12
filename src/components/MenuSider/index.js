import { Menu } from "antd";
import { DashboardOutlined, HighlightOutlined , HomeOutlined, SettingOutlined} from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom";

function MenuSider (){
    const location = useLocation();
    const items = [
        {
            key: "muc-0",
            icon: <HighlightOutlined />,
            label : "Muc 0",
            children : [
                {
                    key: "/",
                    icon: <DashboardOutlined />,
                    label : <Link to={"/"}>Dashboard</Link>
            
                },
                {
                    key: "muc-0-2",
                    icon: <DashboardOutlined />,
                    label : "Muc 0-2",
            
                }
            ]
        },
        {
            key: "muc-1",
            icon: <HighlightOutlined />,
            label : "Muc 1"
        },
        {
            key: "muc-2",
            icon: <HighlightOutlined />,
            label : "Muc 2"
        },
        {
            key: "/book-room",
            icon: <HomeOutlined />,
            label : <Link to={"/book-room"}>BookRoom</Link>
        },
        {
            key: "/room",
            icon: <HomeOutlined />,
            label : <Link to={"/room"}>Room</Link>
        },
        {
            key: "/setting",
            icon: <SettingOutlined />,
            label : <Link to={"/setting"}>Setting</Link>
        },
    ]

    return(
        <>
           <Menu items={items} mode="inline" defaultOpenKeys = {["muc-0"]} defaultSelectedKeys = {[location.pathname]}>

           </Menu>
        </>
    )
}
export default MenuSider;