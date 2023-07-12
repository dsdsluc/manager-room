import { Col, Row , Image} from "antd";
import "./Dashboard.css"
import CollapseMenu from "../../components/CollapseMenu";
function Dashboard (){


    return(
        <>
            <Row gutter={[10,20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <div className="box"> Box 1</div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <div className="box"> Box 2</div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <div className="box"> Box 3</div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <div className="box"> Box 4</div>
                </Col>
                
            </Row>
            <Row gutter={[10, 20]} className="mt-20">
                <Col  xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                <div className="box mh-500"><CollapseMenu/></div>
                </Col>
                <Col  xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div className="box mh-500"> <Image width={300} src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/337373913_3430000860610607_2114457683029165480_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z6tR7sJb0ZwAX8E0hF4&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCajH4u2748xs-NvqdqKZD8pnRIozyq6yIVDbtj4F8Rmg&oe=64A6DCFA"/></div>
                </Col>
                
            </Row>
            <Row gutter={[10, 20]} className="mt-20">
                <Col  xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                <div className="box mh-500">Box 7</div>
                </Col>
                <Col  xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div className="box mh-500"> Box 8</div>
                </Col>
                
            </Row>
        </>
    )
}
export default Dashboard;