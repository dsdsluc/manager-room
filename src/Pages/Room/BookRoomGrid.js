import { useEffect, useState } from "react";
import { getPrevRoom } from "../../services/Room";
import { Card, Col, Row } from "antd";
import DeleteRoom from "../../components/DeleteRoom";

function BookRoomGrid (){
    const [data, setData] = useState([]);
    const fetchApi = async ()=>{
        const response = await getPrevRoom();
        if(response){
            setData(response);
        }
        
    }
    useEffect(()=>{
        
        fetchApi();
    },[])
    const handleReload = ()=>{
        fetchApi();
    }
    return(
        <>
            <Row gutter={[20,20]}>
                {data.map(item=>(
                    <Col xxl={8} xl={8} lg={8} md={12} xs={24} key={item.id}>
                    <Card title={item.fullname} size="small">
                        <p>Emaill: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Gift: {item.gift}</p>
                        <p>Thoi gian lay phong: {item.time}</p>
                        <DeleteRoom id ={item.id} onReload = {handleReload} />
                    </Card>
                </Col>
                ))}
                
            </Row>
        </>
    )
}
export default BookRoomGrid;