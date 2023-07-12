import { useEffect, useState } from "react";
import { getPrevRoom } from "../../services/Room";
import {  Table } from "antd";
import DeleteRoom from "../../components/DeleteRoom";

function BookRoomTable (){
    
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
    const dataSource = data;
    const columns = [
        {
          title: 'Ho va ten',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'So dien thoai',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Gift',
          dataIndex: 'gift',
          key: 'gift',
        },
        {
          title: 'Thoi gian lay phong',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_,record)=>(
            <>
                <DeleteRoom id={record.id} onReload={handleReload}/>
            </>
          )

          
        },
      ];
   
   
    return(
        <>
            <Table dataSource={dataSource} columns={columns} rowKey={"id"}/>
        </>
    )
}
export default BookRoomTable;