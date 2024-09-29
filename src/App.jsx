import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Upload } from 'antd';

import {
  HomeFilled,
  ProductFilled,
  SnippetsFilled,
  ClockCircleFilled,
  FileOutlined,
  ThunderboltFilled,
} from '@ant-design/icons';

import { Flex, Layout, Menu, ConfigProvider } from 'antd';
const { Header, Content, Sider } = Layout;

const { Dragger } = Upload;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
  background: "linear-gradient(160deg, rgba(91,146,205,1) 0%, rgba(121,255,139,1) 100%)",
  borderTopRightRadius: 20
};

const items = [
  { key: '1', icon: <HomeFilled />, label: 'Home', path:'/home' },
  { key: '2', icon: <ProductFilled />, label: 'Dashboard', path:'/dashboard' },
  { key: '3', icon: <ClockCircleFilled />, label: 'Activity', path:'/activity' },
  { key: '4', icon: <SnippetsFilled />, label: 'Reports', path:'/reports' },
  { key: '5', icon: <ThunderboltFilled />, label: 'AI Chatbot', className: 'aibutton', path:'/aichatbot' },
];  

const App = () => {

  const location = useLocation();

  return (
    <>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'white',
        colorTextBase: 'black',
        colorPrimaryText: 'yellow',
        colorPrimaryTextActive: 'pink',
        fontFamily: "REM",
      },
    }}
  >
 <Layout
      style={{
        minHeight: '100vh',
        borderRadius: 32,
      }}
    >
      <Sider style={siderStyle}>
        <div style={{
          margin: 20,
          marginLeft: 40,
          justifyContent: 'center',
        }}>
          <Flex gap="small">
            <FileOutlined style={{
              color: 'white',
              fontSize: 20
              }} />
            <h1 style={{
              color: 'white'
              }}>Salamah</h1>
          </Flex>
        </div>

        <Menu defaultSelectedKeys={['1']} mode="inline" style={{ padding: 10 }}>
      {items.map(item => (
        <Menu.Item key={item.key} className={item.className} style={{ height: 50 }}>
          <Link to={item.path}>
            {item.icon}
            <span style={{ marginLeft: 8 }}>
            {item.label}
            </span>
          </Link>
        </Menu.Item>
      ))}
      <div >
      <Dragger style={{
          marginInlineStart: 4,
          width: 170,
          marginTop: 150,
          color: 'rgba(68,159,244,1)',
          background: 'rgba(255,255,255,0.3)',
        }}>
        <SnippetsFilled style={{
          marginTop: 15,
          fontSize: 24,

        }} />
        <p style={{
          fontSize: 13,
        }}>Click or drag file to this area to upload.</p>
      </Dragger>
      </div>
      
    </Menu>
        
      </Sider>
      <Layout style={{
          marginInlineStart: 200,
        }}>

      <Header style={{
            background: 'rgba(0, 0, 0, 0)',

          }}>
      <div >
          <h1>Welcome, Khaled</h1>
        </div>
      </Header>
        <Content >
           <div
            style={{
              marginTop: 0,
              margin:16,
              padding: 10,
              background: "#fff",
              borderRadius: 32,
            }}
          >
          <AnimatePresence>
                <motion.div
                    key={location.key}
                    exit={{ opacity: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
          </div>

        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
    </>
  );
};
export default App;
