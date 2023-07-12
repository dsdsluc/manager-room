import { Button  } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoomCreation } from "../../services/Room";
import Swal from 'sweetalert2';

function DeleteRoomCreation (props){
    const {onReload , id, title} =props;

    const handleDelete = async (id) =>{
        const response = await deleteRoomCreation(id);
        if(response){
          
            onReload();
        }
    }
    const handleConfirm = (id)=>{
        Swal.fire({
            title: 'Ban co muon xoa san pham ?',
            text: `San pham ban muon xoa la ${title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xoa!',
            cancelButtonText: 'Khong xoa!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                `Ban da xoa thanh cong san pham ${title}`,
                'success'
              );
              handleDelete(id);
            }
          })
          
    }
    
    return(
        <>
       
            <Button onClick={()=>handleConfirm(id)} danger icon = {<DeleteOutlined />}></Button>
        </>
    )
}
export default DeleteRoomCreation;