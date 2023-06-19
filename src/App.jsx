import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "./app/features/todoSlice";
import { Input, Select, Form, DatePicker, Button } from "antd";
import Out from "../src/components/Out.jsx";
import { useRef } from "react";
const { TextArea } = Input;
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.todo.users);
  const TODO = useSelector((state) => state.todo.TODO);

  const formRef  = useRef(null)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const same = false
    for (let i = 0; i < users.length; i++) {
        
    }
    console.log("Success:", values);
    dispatch(setTodo(values));
    formRef.current.resetFields()
  };

  return (
    <div className="App" style={{  backgroundColor: "beige",	}}>
      <h2
        style={{
          paddingBottom: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        TODO Dashboard
      </h2>
      <center>
        {" "}
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
          ref = {formRef}
          onFinish={onFinish}
        >
          <Form.Item label="Description" name="Description">
            <TextArea   rows={4} />
          </Form.Item>

          <div className="assigned">
            <Form.Item label="Assign To" name="assigned_to">
              <Select>
                {users.map((user) => (
                  <Select.Option value={user.name}> {user.name} </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <Form.Item label="DatePicker" name="deadline">
            <DatePicker />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </center>

      <Out TODO={TODO} />
    </div>
  );
}

export default App;
