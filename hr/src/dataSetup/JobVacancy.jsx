import { Component, Fragment } from "react";
import { Breadcrumb } from "antd";
import {
  Table,
  Tag,
  Space,
  Divider,
  Row,
  Col,
  Button,
  Modal,
  Input,
} from "antd";
import { Form, Checkbox } from "antd";
import { PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../App.css";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    position: "Mobile Developer",
    job_level: "Middle / Senior",
    education: "Completed Bachelors degree",
    qualification: "Familiar with Flutter",
    tags: ["nice", "developer"],
  },
];

class jobVacancy extends Component {
  state = {
    isModalVisible: false,
    modalEdit: false,
    user_name: "Dimas Bayu",
    editorState: "",
  };

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  showModalDelete = () => {
    this.setState({
      modalDelete: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  hideModal = () => {
    this.setState({
      modalDelete: false,
    });
  };

  render() {
    return (
      <Fragment>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Data Setup</Breadcrumb.Item>
          <Breadcrumb.Item>Job Vacancy</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Divider orientation="right">
            <Row>
              <Col>
                <Button type="primary" onClick={this.showModal}>
                  <PlusCircleOutlined /> Add
                </Button>
                <Button type="primary" danger style={{ marginLeft: "0.5em" }}>
                  <ReloadOutlined />
                </Button>
              </Col>
            </Row>
          </Divider>
          <Table dataSource={data}>
            <ColumnGroup title="VACANCY">
              <Column title="Position" dataIndex="position" key="position" />
              <Column title="Job Level" dataIndex="job_level" key="job_level" />
              <Column title="Education" dataIndex="education" key="education" />
              <Column
                title="Qualification"
                dataIndex="qualification"
                key="qualification"
              />
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <a>
                      <Button type="primary">Edit</Button>
                    </a>
                    <a>
                      <Button
                        type="primary"
                        danger
                        onClick={this.showModalDelete}
                      >
                        Delete
                      </Button>
                    </a>
                  </Space>
                )}
              />
            </ColumnGroup>
          </Table>
          <Modal
            title="Add Vacancy"
            visible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item
                  label="Positions"
                  name="position"
                >
                  <Input />
                </Form.Item>
              </Form>
              <Editor
                // editorState={this.state.ed}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              />
              
          </Modal>
          <Modal
            title={"Delete user " + this.state.user_name}
            visible={this.state.modalDelete}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="Yes"
            cancelText="No"
          >
            <p>Are you sure want delete this user? {this.state.user_name}</p>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default jobVacancy;
