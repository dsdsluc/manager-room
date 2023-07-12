import {
  Col,
  Input,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Select,
  Form,
  Button,
} from "antd";
import { createPrevRoom } from "../../services/Room";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

function BookRoom() {
  const [form] = useForm();
  const navigation = useNavigate()
  
  const handleFinsh = async (values)=>{
    console.log(values);
    
    const response = await createPrevRoom(values);
    if(response){
      form.resetFields();
    }
    navigation("/room");
  }
  const TimeOpenArray = [];
  for (let i = 7; i < 24; i++) {
    TimeOpenArray.push({
      value: i + "h",
      label: i + "gio",
    });
  }

  return (
    <>
      <h2>Dat Phong`</h2>
      <Form onFinish ={handleFinsh} layout="vertical" form={form} >
        <Row gutter={[20, 10]}>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Ho va ten" name="fullname" required>
              <Input />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="0987654321" />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Dich vu them" name="service">
              <Checkbox.Group>
                <Checkbox value={"thue xe may"}>Thue xe may</Checkbox>
                <Checkbox value={"thue o to 4 cho"}>Thue o to 4 cho</Checkbox>
                <Checkbox value={"thue o to 7 cho"}>Thue o to 7 cho</Checkbox>
                <Checkbox value={"thue xe dap"}>Thue xe dap</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Gio nhan phong" name="time">
              <Select options={TimeOpenArray} />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Qua tang them" name="gift">
              <Radio.Group>
                <Radio value={"kem chong nang"}>Kem chong nang</Radio>
                <Radio value={"mu"}>Mu</Radio>
                <Radio value={"ao doi"}>Ao doi</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item label="Ngay thue phong" name="booktime">
              <RangePicker
              value={"dayString"}
                format={"DD/MM/YYYY"}
                placeholder={["Ngay nhan phong", "Ngay tra phong"] }
              />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default BookRoom;
