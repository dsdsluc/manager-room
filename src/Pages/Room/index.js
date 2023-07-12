import { Button } from "antd";
import { Link } from "react-router-dom";
import RoomGrid from "./RoomGrid";
import { useEffect, useState } from "react";
import { getRoom } from "../../services/Room";
import BookRoomGrid from "./BookRoomGrid";
import RoomTable from "./RoomTable";
import { AppstoreOutlined , TableOutlined } from "@ant-design/icons";
import BookRoomTable from "./BookRoomTable";
function Room (){
    const [data, setData] = useState([]);
    const [isGrid, setIsGrid] = useState(false);
    const fetchApi = async ()=>{
        const response = await getRoom();
        setData(response.reverse())
    }
    useEffect(()=>{
        
        fetchApi();
    },[]);
    const handleReload = ()=>{
        fetchApi();
    }
    return(
        <>
            <h2> Tao Phong</h2>
            <Link to = {"/create-room"}><Button>Tao phong</Button> </Link>
            <Button icon = {<AppstoreOutlined/>}  onClick={()=>(setIsGrid(true))} ></Button>
            <Button icon = {<TableOutlined/>}  onClick={()=>(setIsGrid(false))} ></Button>
            <div className="mt-20">
                {isGrid ? (
                    <RoomGrid data={data} onReload = {handleReload} />
                ):(
                    <RoomTable data={data} onReload = {handleReload} />
                )}
                
               
            </div>
            <h2>Dat Phong</h2>

            <div>
                {isGrid? (
                    <BookRoomGrid />
                ):(
                    <BookRoomTable onReload = {handleReload}/>
                )}
                
               
            </div>
        </>
    )
}
export default Room;