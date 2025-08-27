
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SVG from '../../SVGs/LandingSVG';
import { useTranslation } from 'react-i18next';

import Button from '../../components/button';

import OnLine from '../../SVGs/onLine';
import Reports from '../../SVGs/reports';
import Support from '../../SVGs/support';

import IMG1 from '../../images/1.png';
import IMG2 from '../../images/3.png';
import IMG3 from '../../images/2.png';
import Responsev from '../../images/responsev.png';

import {  useSelector } from 'react-redux';
import { Carousel } from 'antd';
import React from 'react';


export default function App(){
    const { t } = useTranslation();
    const mode = useSelector((state) => state.mode);


    const downloadFiles = () => {
        window.open("https://almonazim.com/المنظم.apk", '_blank'); // فتح الرابط الأول
    //  console.log(1)
    //     // إضافة تأخير قبل فتح الرابط الثاني
    //     setTimeout(() => {
    //        window.open("https://almonazim.com/المنظم_فواتير.apk", '_blank'); // فتح الرابط الثاني
    //        console.log(2)
    //     }, 4000);
    };
    
    
    return(
        <Container>
            <Row className='justify-center'>
                <Col lg={4} md={6} sm={12} className='landing-text-top'>
                    <div >
                        <h1 className="text-5xl font-bold main_color ">
                        {t("AL_MONAZZEM")}
                        </h1>
                        <p className='text-2xl pt-4 font-bold'>
                            {t("text_landing_1")}
                        </p>
                        <p className='text-xl pb-4'>
                            {/* {t("text_landing_2")} */}
                            {t('text_landing_2')}
                        </p>
                        <div>
                            <Button href="#Contact_us" text={t("download_app_now")} />
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12} className='flex justify-center'>
                    <SVG />
                </Col>
            </Row>
            <Row className={'justify-center py-5 '+mode+"_svg"}>
                <Col lg={4} md={10} sm={12} className='py-3' >
                    <div className='landing-card'>
                        <p className='text-start px-3'>
                            <div className='text-2xl'>
                                {t("l_c_1")}
                            </div>
                            <div>
                                {t("l_c_1_text")}
                            </div>
                        </p>
                        <p>
                            <OnLine />
                        </p>
                        
                    </div>
                </Col>
                <Col  lg={4} md={10} sm={12} className='py-3' >
                    <div className='landing-card'>
                        <p className='text-start px-3'>
                            <div className='text-2xl'>
                                {t("l_c_2")}
                            </div>
                            <div>
                                {t("l_c_2_text")}
                            </div>
                        </p>
                        <p>
                            <Reports />
                        </p>
                        
                    </div>
                </Col>
                <Col  lg={4} md={10} sm={12} className='py-3' >
                    <div className='landing-card'>
                        <p className='text-start px-3'>
                            <div className='text-2xl'>
                                {t("l_c_3")}
                            </div>
                            <div>
                                {t("l_c_3_text")}
                            </div>
                        </p>
                        <p>
                            <Support />
                        </p>
                        
                    </div>
                </Col>
            </Row>

            <Row className='justify-center py-5 '>
                <p className="text-4xl font-bold main_color pb-5 "> {t("text_access")} </p>
                
                <img className='responsev_img' src={Responsev} />
                <p className="text-xl font-bold" > {t("can_use")} </p>
                <p className="text-xl font-bold pb-5" > {t("just_sign_in")} </p>
                <hr className='hr-index' />
            </Row>
            
            <Row className='justify-center py-10 pb-24'>
                <Col lg={12} xs={12} className='phone-none' >
                <Carousel dotPosition={"right"} autoplay className='Ar'  >
                <div>
                    <Container >
                        <Row className='justify-center'>
                            <Col lg={5} md={6}  className='landing-text-down'>
                                <div >
                                    <h1 className="text-4xl font-bold main_color ">
                                    {t("phone_4")}
                                    </h1>
                                    <p className='text-2xl pt-4 '>
                                        {t("text_phone_4")}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={5} md={6}  className='flex justify-center'>
                                <img src={IMG2} />
                            </Col>
                        </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>
                                <Row className='justify-center'>
                                    <Col lg={5} md={6}  className='flex justify-center'>
                                        <img src={IMG3} />
                                    </Col>
                                    <Col lg={5} md={6}  className='landing-text-down'>
                                        <div >
                                            <h1 className="text-4xl font-bold main_color ">
                                            {t("phone_3")}
                                            </h1>
                                            <p className='text-2xl pt-4 '>
                                                {t("text_phone_3")}
                                            </p>
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container>
                                <Row className='justify-center'>
                                    <Col lg={5} md={6}  className='landing-text-down'>
                                        <div >
                                            <h1 className="text-4xl font-bold main_color ">
                                            {t("phone_2")}
                                            </h1>
                                            <p className='text-2xl pt-4 '>
                                                {t("text_phone_2")}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={6}className='flex justify-center'>
                                        <img src={IMG2} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        
                        
                        <div>
                            <Container>
                                <Row className='justify-center'>
                                <Col lg={5} md={6} className='flex justify-center'>
                                        <img src={IMG1} />
                                    </Col>
                                    <Col lg={5} md={6}  className='landing-text-down'>
                                        <div >
                                            <h1 className="text-4xl font-bold main_color ">
                                            {t("phone_1")}
                                            </h1>
                                            <p className='text-2xl pt-4 '>
                                                {t("text_phone_1")}
                                            </p>
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Container>
                        </div>
                </Carousel>
                </Col>
                <Col className='laptop-none' lg={12} sm={12}>
                    
                    <div className='pt-3'>
                        <Row className='justify-center'>
                            <Col lg={5} md={6}  className='landing-text-down'>
                                <div >
                                    <h1 className="text-2xl font-bold main_color ">
                                    {t("phone_4")}
                                    </h1>
                                    <p className='text-xl py-4 '>
                                        {t("text_phone_4")}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={5} md={6}  className='flex justify-center'>
                                <img src={IMG2} />
                            </Col>
                        </Row>
                    </div>
                    <hr className='m-10' />
                    <div className='pt-3'>
                        <Row className='justify-center'>
                            <Col lg={5} md={6}  className='landing-text-down'>
                                <div >
                                    <h1 className="text-2xl font-bold main_color ">
                                    {t("phone_3")}
                                    </h1>
                                    <p className='text-xl py-4 '>
                                        {t("text_phone_3")}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={5} md={6}  className='flex justify-center'>
                                <img src={IMG3} />
                            </Col>
                            
                            
                        </Row>
                        </div>
                        <hr className='m-10' />
                        <div >
                                <Row className='justify-center'>
                                    <Col lg={5} md={6}  className='landing-text-down'>
                                        <div >
                                            <h1 className="text-2xl font-bold main_color ">
                                            {t("phone_2")}
                                            </h1>
                                            <p className='text-xl py-4 '>
                                                {t("text_phone_2")}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={6}className='flex justify-center'>
                                        <img src={IMG2} />
                                    </Col>
                                </Row>
                        </div>
                        
                        <hr className='m-10' />
                        <div>
                                <Row className='justify-center'>
                                    <Col lg={5} md={6}  className='landing-text-down'>
                                        <div >
                                            <h1 className="text-2xl font-bold main_color ">
                                            {t("phone_1")}
                                            </h1>
                                            <p className='text-xl py-4 '>
                                                {t("text_phone_1")}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={6} className='flex justify-center'>
                                        <img src={IMG1} />
                                    </Col>
                                    
                                    
                                </Row>
                        </div>
                
                </Col>
            </Row>
        </Container>
    )

}