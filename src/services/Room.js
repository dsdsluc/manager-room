import { del, get, patch, post } from "../utils/request"

export const createRoom = async (values)=>{
    const response = await post("room", values);
    return response;
}
export const getRoom = async ()=>{
    const response = await get("room");
    return response;
}
export const getPrevRoom = async ()=>{
    const response = await get("prevroom");
    return response;
}

export const createPrevRoom = async (options)=>{
    const response = await post("prevroom", options);
    return response
}
export const deletePrevRoom = async (id)=>{
    const response = await del(`prevroom/${id}`)
    return response
}
export const editRoom = async (id, options)=>{
    const response = await patch(`room/${id}`,options)
    return response
}
export const deleteRoomCreation = async (id)=>{
    const response = await del(`room/${id}`)
    return response;
}
