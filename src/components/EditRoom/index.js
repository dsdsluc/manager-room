import { Button, Tooltip , Modal, Form, Input, InputNumber, Switch, Select } from "antd";
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import { editRoom } from "../../services/Room";

function EditRoom (props){
    const {record, onReload}= props;
    const [showModal, setShowModal] = useState(false);
    const  handleModal = ()=>{
        setShowModal(true)
    }
    const handleCancel= ()=>{
        setShowModal(false)
    }
    const [form] =Form.useForm();
    const utils = [
        {
            label: "Dieu hoa",
            value: "Condition"
        },
        {
            label: "Tu lanh",
            value: "refrigerator"
        },
        {
            label: "View bien",
            value: "ViewBeach"
        },
        {
            label: "May giat",
            value: "washing-machine"
        },
        {
            label: "TV",
            value: "Television"
        },
    ];
    const handleFinsh = async (values)=>{
        const response = await editRoom(record.id,values);
        console.log(response);
        if(response){
            setShowModal(false);
            onReload();           
        }     
        
    }

    return(
        <>
        <Tooltip title="Edit phong">
            <Button icon={<EditOutlined/>} onClick={handleModal} ></Button>
            <Modal title="Chinh sua phong" open = {showModal} footer={null} onCancel={handleCancel}>
            <Form form={form} onFinish ={handleFinsh} initialValues = {record} >
                <Form.Item name="name" label="Ten phong" rules={[
                    {
                        required: true,
                        message: "Vui long nhap ten phong!"
                    }
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="desc"label="Mo ta">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="quantityBed"label="So luong giuong" >
                <InputNumber min={1}/>
                </Form.Item>
                <Form.Item name="quantityPeople"label="So luong nguoi toi da">
                <InputNumber min={1}/>
                </Form.Item>
                <Form.Item name="utils"label="Cac tien ich " >
                <Select options = {utils}  mode="multiple"/>
                </Form.Item>
                <Form.Item label="Thong tin da dung chua" name="status"  valuePropName="checked" >
                    <Switch />
                </Form.Item>
                <Form.Item label="Loai phong" name="type"  valuePropName="checked" >
                    <Switch checkedChildren="Vip" unCheckedChildren ="Thuong" />
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                
                
                
            </Form>
            </Modal>
        </Tooltip>
            
        </>
    )
}
export default EditRoom;