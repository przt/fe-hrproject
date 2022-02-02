import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BugOutlined,
  FileTextOutlined,
  FileUnknownOutlined,
  ClusterOutlined,
  IdcardOutlined,
  SettingOutlined,
  FolderOpenOutlined,
  ControlOutlined,
  BarsOutlined,
  BarChartOutlined,
  SolutionOutlined,
  UserSwitchOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
//System Setup

import user from './systemSetup/user';
import Role from './systemSetup/role';
import Authorization from './systemSetup/authorization';

//Data Setup
import jobVacancy from './dataSetup/JobVacancy';
import employees from './dataSetup/Employees';
import template from './dataSetup/Templates';

//Job Applicant

import dataApplicant from './jobApplicant/dataApplicant';


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {


  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (

      <Fragment>
        <BrowserRouter>
          <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Dashboard
                </Menu.Item>
                <SubMenu key="systemSetup" icon={<SettingOutlined />} title="System Setup">
                  <Menu.Item key="user" icon={<UserOutlined />}>
                    <Link to="/user">
                      User
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="role" icon={<ClusterOutlined />}>
                    <Link to="/role">
                      Role
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<IdcardOutlined />}>
                    <Link to="/authorization">
                      Authorization
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="dataSetup" icon={<BarsOutlined />} title="Data Setup">
                  <SubMenu key="generalSetup" icon={<ControlOutlined />} title="General Setup">
                    <Menu.Item key="template" icon={<FolderOpenOutlined />}><Link to="/template">Template</Link></Menu.Item>
                    <Menu.Item key="vacancy" icon={<AppstoreAddOutlined />}><Link to="/jobVacancy">Job Vacancy</Link></Menu.Item>
                    <Menu.Item key="employees" icon={<TeamOutlined />}><Link to="/employees">Employees</Link></Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="dataStaging" icon={<SolutionOutlined />} title="Job Applicant">
                  <Menu.Item key="dataApplicant" icon={<IdcardOutlined />}><Link to="/dataApplicant">Data Applicant</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="dataConsolidation" icon={<BarChartOutlined />} title="Processing Data">
                  <Menu.Item key="consolidationElimination" icon={<UserSwitchOutlined />}>Elimination Applicant</Menu.Item>
                </SubMenu>
                <SubMenu key="report" icon={<FileOutlined />} title="Report">
                  <Menu.Item key="reportFinal" icon={<FileTextOutlined />}>Report</Menu.Item>
                  <Menu.Item key="customReport" icon={<FileUnknownOutlined />}>Custom Report</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<BugOutlined />}>
                  Log Error
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {/* system-setup */}
                <Route path="/user" component={user} />
                <Route path="/role" component={Role} />
                <Route path="/authorization" component={Authorization} />

                {/* data-setup */}
                <Route path="/template" component={template} />
                <Route path="/employees" component={employees} />
                <Route path="/jobVacancy" component={jobVacancy} />

                {/* general setup */}
                <Route path="/dataApplicant" component={dataApplicant} />

                {/* consol-setup */}

              </Content>
              <Footer style={{ textAlign: 'center' }}>recruify ©2021 Created by Dimas Bayu</Footer>
            </Layout>
          </Layout>
          </Layout>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
