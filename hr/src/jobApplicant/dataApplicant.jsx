import { Component, Fragment } from 'react';
import { Breadcrumb } from 'antd';
import { Table, Tag, Space, Divider, Row, Col, Button, Modal } from 'antd';
import {
    PlusCircleOutlined,
    ReloadOutlined
} from '@ant-design/icons'
import '../App.css';


const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


class dataApplicant extends Component {

    state = {
        isModalVisible: false,
        modalEdit: false,
        user_name:'Dimas Bayu'
    }

    showModal = () => {
        this.setState({
            isModalVisible: true,
        })
    };
    showModalDelete = () =>{
        this.setState({
            modalDelete: true
        })
    }

    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };

    handleCancel = () => {
        this.setState({
            isModalVisible: false,
            

        })
    };
    hideModal = () =>{
        this.setState({
            modalDelete: false
        })
    }


    render() {
        return (
            <Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Job Applicant</Breadcrumb.Item>
                    <Breadcrumb.Item>Data Applicant</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Divider orientation="right">
                        <Row>
                            <Col>
                                <Button type="primary" onClick={this.showModal}><PlusCircleOutlined /> Add</Button>
                                <Button type="primary" danger style={{ marginLeft: '0.5em' }} ><ReloadOutlined /></Button>
                            </Col>

                        </Row>
                    </Divider>
                    <Table dataSource={data}>
                        <ColumnGroup title="APPLICANT">
                            <Column title="Username" dataIndex="firstName" key="firstName" />
                            <Column title="Email" dataIndex="lastName" key="lastName" />
                            <Column title="Company" dataIndex="age" key="age" />
                            <Column title="Department" dataIndex="address" key="address" />
                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => (
                                    <Space size="middle">
                                        <a><Button type="primary">Edit</Button></a>
                                        <a><Button type="primary" danger onClick={this.showModalDelete}>Delete</Button></a>
                                    </Space>
                                )}
                            />
                        </ColumnGroup>
                    </Table>
                    <Modal title="Add User" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <Divider>
                                    
                        </Divider>
                    </Modal>

                    <Modal
                        title={'Delete user '+this.state.user_name}
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
        )
    }
}

export default dataApplicant;