import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import Nav from 'react-bootstrap/Nav';

import {  SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import { MoonOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
export default function App() {

  
  const {toggleMode,setLanguage} = modeActions;
  const dispatch = useDispatch();
  const items = [
    {
      key: '1',
      label: (
        
        <Nav.Link onClick={()=>dispatch(setLanguage("Ar"))} eventKey="link-1">
          العربية
        </Nav.Link >
      ),
    },
    {
      key: '2',
      label: (
        <Nav.Link onClick={()=>dispatch(setLanguage("En"))} eventKey="link-1">
          English
        </Nav.Link >
      ),
    },
    {
      key: '3',
      label: (
        <Nav.Link onClick={()=>dispatch(setLanguage("Tu"))} eventKey="link-1">
          Türkçe
        </Nav.Link >
      ),
    },
  ];


  return(
    <>
    <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link> 
          <Button onClick={()=>dispatch(toggleMode())} className='setting-button' shape="round"  variant="text">
            <MoonOutlined />
          </Button>
        </Nav.Link>
        
        <Nav.Link> 
          <Space direction="vertical">
            <Space wrap>
              <Dropdown menu={{ items }} placement="bottom">
                <Button className='setting-button' shape="round"  variant="text"><SettingOutlined /></Button>
              </Dropdown>
            </Space>
          </Space>
        </Nav.Link>
    </Nav>
    </>

  )
}
