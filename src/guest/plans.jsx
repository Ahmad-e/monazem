
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Button, Divider, Flex, Radio } from 'antd'
import { CloseCircleOutlined, CheckOutlined ,PlusOutlined } from '@ant-design/icons';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


export default function App(){
    const { t } = useTranslation();
    const [radioValue, setRadioValue] = useState('1');
    const [size, setSize] = useState('y'); // default is 'middle'
    const radios = [
        { name:  t("Annual_plans") , value: 'y' },
        { name:  t("Monthly_plans"), value: 'm' }
      ];

    return(
        <Container>
            <Row className='justify-center'>
                <Col md={10} sm={11} className='p-5'>
                    <h1 className="text-2xl font-bold p-2">
                        {t("h_plans")}
                    </h1>
                    <div>
                        {t("h_plans_desc")}
                    </div>
                </Col>
            </Row>
            <Row className='mb-5 justify-center'>
                <Col  sm={4} dir='ltr'>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant='outline-warning'
                            name="radio"
                            value={radio.value}
                            checked={size === radio.value}
                            onChange={(e) => setSize(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
                
                
            </Row>
            <Row className='justify-center'>
                <Col lg={4} md={6} sm={9} xs={11}>
                    <div className='flex justify-center'>
                        <div className="plan_card">
                            <p className='main_color text-2xl font-bold  text-center'>
                                {t('free')}
                            </p>
                            <p className='font-bold'>
                                {t('for')} 15 {t('day')}
                            </p>
                            <p>
                                {t('start_at')}
                            </p>
                            <p className='main_color text-5xl text-center'>
                                0$
                            </p>
                            <p className='text-base text-gray-500'>
                                {t('free_desc')}
                            </p>
                            <hr className='hr-index m-2'/>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"18px" , margin:"0px 8px"}} />
                                {t('create_partners')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"18px" , margin:"0px 8px"}} />
                                {t('create_Accountants')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px" }} />
                                {t('create_orders')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_employees')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_custumers')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_suppliers')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('open_transaction')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('report')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('support')}
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={9} xs={11}  >
                {/* <div className='best_plan' >
                        {t("best_blan")}
                    </div> */}
                <div className='flex justify-center'>
                    <div className="plan_card best_plan_card">
                        <p className='main_color text-2xl font-bold  text-center'>
                            {t('one_user')}
                        </p>
                        <p className='font-bold'>
                            {t('for')} 1 { size==="y" ? (t('year')) : (t('month'))}
                        </p>
                        <p>
                            {t('start_at')}
                        </p>
                        <p className='main_color text-5xl  text-center'>
                            { size==="y" ? "100$" : "10$" }
                        </p>
                        <p className='text-base text-gray-500'>
                            {t('one_user_desc')}
                        </p>
                        <hr className='hr-index  m-2'/>
                        
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px" }} />
                            {t('create_orders')}
                        </p>
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('create_employees')}
                        </p>
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('create_custumers')}
                        </p>
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('create_suppliers')}
                        </p>
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('open_transaction')}
                        </p>
                        <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('report')}
                            </p>
                        <p className='text-base'>
                            <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('support')}
                        </p>
                        <p className='text-base'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("First") +" "+ t("add") }  <span className='main_color'>{ size==="y" ? "90$" : "9$" }  </span>
                        </p>
                        <p className='text-base'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("Second") +" "+ t("add") }  <span className='main_color'> { size==="y" ? "80$" : "8$" } </span>
                        </p>
                        <p className='text-base'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("Third") +" "+ t("add") }  <span className='main_color'> { size==="y" ? "70$" : "7$" } </span>
                        </p>
                        <p className='text-base'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("Fourth") +" "+ t("add") }  <span className='main_color'> { size==="y" ? "60$" : "6$" } </span>
                        </p>
                        <p className='text-base'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("Fifth") +" "+ t("add") }  <span className='main_color'>  { size==="y" ? "50$" : "5$" }  </span>
                        </p>
                        <p>
                            . . . . .
                        </p> 
                        <p className='font-bold'>
                        <PlusOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                            {t('user') +" "+  t("Tenth") +" "+ t("add") }  <span className='main_color'> 0$ </span>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={9} xs={11} >
                    <div className='flex justify-center'>
                        <div className="plan_card">
                            <p className='main_color text-2xl font-bold  text-center'>
                                {t('open')}
                            </p>
                            <p className='font-bold'>
                                {t('for')} 1 { size==="y" ? (t('year')) : (t('month'))}
                            </p>
                            <p className='main_color text-5xl text-center'>
                                { size==="y" ? "550$" : "55$" }
                            </p>
                            <p className='text-base text-gray-500'>
                                {t('open_desc')}
                            </p>
                            <hr className='hr-index  m-2'/>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"18px" , margin:"0px 8px"}} />
                                {t('create_partners')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"18px" , margin:"0px 8px"}} />
                                {t('create_Accountants')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px" }} />
                                {t('create_orders')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_employees')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_custumers')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('create_suppliers')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('open_transaction')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('report')}
                            </p>
                            <p className='text-base'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('support')}
                            </p>
                            <p className='font-bold'>
                                <CheckOutlined style={{ color:"#14b46a" , fontSize:"20px" , margin:"0px 8px"}} />
                                {t('new_user_over')}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justify-center'>
                <Col md={10} sm={11}>
                    <div className='p-5'>
                        <h1  className="text-2xl font-bold p-2">
                        {t("download_app")} 
                        </h1>
                        
                        <p>
                            {t("download_app_desc")} 
                            <a href="#Contact_us" style={{ textDecoration: "underline" , fontWeight:"bold" }} >{t("go_to")}</a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}