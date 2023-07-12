import { Table , Tag , Tooltip } from "antd";
import DeleteRoomTable from "../../components/DeleteRoomTable";
import EditRoom from "../../components/EditRoom";

function RoomTable (props){
    const {data , onReload} =props;
    const dataSource = data;
      
      const columns = [
        {
          title: 'Ten Phong',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'So luong giuong',
          dataIndex: 'quantityBed',
          key: 'quantityBed',
        },
        {
          title: 'Trang thai',
          dataIndex: 'status',
          key: 'status',
          render : (_, record)=>(
            <Tooltip title ={record.status ? ("Phong chua co khach dat"):("Phong da co khach dat")}>
            <Tag color={record.status ? ("green"):("red")}>
              {record.type ? ("Con phong"):("Het phong")}
            </Tag>
            </Tooltip>
          )
        },
        {
          title: 'Loai phong',
          dataIndex: 'type',
          key: 'type',
          render : (_, record)=>(
            <Tooltip title ={record.type ? ("Phong VIP "):("Phuong thuong")}>
              <Tag color={record.type ? ("#3b5999"):("gray")}>
              {record.type ? ("VIP"):("Thuong")}
              </Tag>
            </Tooltip>
                
            
          )
        },
        {
          title: 'Loai phong',
          key: 'action',
          render : (_, record)=>(
            <>
                <DeleteRoomTable record= {record} onReload = {onReload}/>
                <EditRoom record= {record} onReload = {onReload}/>
            </>
          )
        },
        
      ];

    return(
        <>
            <Table dataSource={dataSource} columns={columns} rowKey="id" />;
        </>
    )
}
export default RoomTable;