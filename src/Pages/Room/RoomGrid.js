import { Badge, Card, Col, Row } from "antd";
import DeleteRoomCreation from "../../components/DeleteRoomCreation";

function RoomGrid(props) {
  const { data, onReload } = props;
  return (
    <>
      <Row gutter={[20, 20]}>
        {data.map((item) => (
          <Col xxl={8} xl={8} lg={8} md={12} xs={24} key={item.id}>
            <Badge.Ribbon text={item.type ? ("VIP"):("Thuong")} color={item.type ? ("blue"):("gray")}>
              <Card title={item.name} bordered={false} size="small">
                
                <p>
                  So nguoi giuong: <strong> {item.quantityBed} </strong>
                </p>
                <p>
                  So nguoi nguoi: <strong> {item.quantityPeople} </strong>
                </p>
                <Badge
                  color={item.status ? "green" : "red"}
                  text={item.status ? "Con phong" : "Het Phong"}
                ></Badge>
                <p> 
                    Tien ich: {item.utils.map(item=>(
                        item + ", "
                    ))}
                </p>
                <DeleteRoomCreation onReload ={onReload} id={item.id} title = {item.title
                }/>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default RoomGrid;
