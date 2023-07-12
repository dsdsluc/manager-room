import { Button, Form , Input, InputNumber, Select , Switch } from "antd";
import { createRoom } from "../../services/Room";
import { useNavigate } from "react-router-dom";

function CreateRoom (){
    const navigation = useNavigate()
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
        const response = await createRoom(values);
        console.log(response);
        if(response){
            form.resetFields();
            alert("Tao phong thanh cong");
            navigation(-1);
        }
        
        
    }
    return(
        <>
            <h2>Tao phong moi</h2>
            <Form form={form} onFinish ={handleFinsh} initialValues = {
                {
                    quantityBed: 1,
                    quantityPeople: 1,
                    status: true,
                    type: false
                }
            } >
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
                <Form.Item label="Thong tin da dung chua" name="type"  valuePropName="checked" >
                    <Switch checkedChildren="Vip" unCheckedChildren ="Thuong" />
                </Form.Item>
                <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                
                
                
            </Form>
        </>
    )
}
export default CreateRoom;