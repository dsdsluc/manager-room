import { Layout, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Logo from "../../../images/logo.png";
import Logo_fold from "../../../images/logo-fold.png";
import "./Layout.css"
import { useState } from "react";
import NotifyDropdown from "../../../components/NotifyDropdown";
import MenuSider from "../../../components/MenuSider";
import { Outlet } from "react-router-dom";
function LayoutDefault (){
    const [collapsed, setCollapsed] = useState(false);
    const handleSider = ()=>{
        setCollapsed(!collapsed);
    }

    return(
        <>          
                <header className="header">
                    <div className={"header__logo " + (collapsed && "header__logo--fold")}>
                        <img src={collapsed ? (Logo_fold):(Logo)} />
                    </div>
                    <div className="header__main">
                        <Button onClick={handleSider} icon={<MenuFoldOutlined />}></Button>
                        < NotifyDropdown/>
                    </div>
                </header>
            <Layout>
                             
                        <Sider theme="light" collapsed= {collapsed} className="main__sider " breakpoint="lg" onBreakpoint={(broken)=>{
                                setCollapsed(broken);
                        }}><MenuSider/></Sider>
                        <Content className={"main__content  " + (collapsed && "main__content--fold mt-20")}><Outlet/></Content>                    
            </Layout>
        </>
    )
}
export default LayoutDefault;