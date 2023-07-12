import { Button } from "antd";
import { deletePrevRoom  } from "../../services/Room";
import Swal from 'sweetalert2';

function DeleteRoom (props){
    const {id, onReload, title} = props;
    const handleDelete = async (id)=>{ 
        const reponse = await deletePrevRoom(id);
        if(reponse){
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
            <Button type="primary" onClick={()=>handleConfirm(id)}>DeleteRoom</Button>
        </>
    )
}
export default DeleteRoom;