import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined  } from "@ant-design/icons";
import { deleteRoomCreation } from "../../services/Room";
function DeleteRoomTable (props){
    const {record ,onReload} = props; 
    const handleDelete = async ()=>{
        const response = await deleteRoomCreation(record.id);
        if(response){
            onReload();
        }
    }

    return(

        <>
        <Tooltip title = "Xoa phong">
            <Popconfirm title = "Ban co chac mun xoa phong ?" onConfirm={handleDelete} >
                <Button danger icon = {<DeleteOutlined />}></Button>
            </Popconfirm>
        </Tooltip>
        
          
        </>
    )
}
export default DeleteRoomTable;