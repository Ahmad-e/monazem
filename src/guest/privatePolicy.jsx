
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';

export default function App(){
    const { t } = useTranslation();

    return(
        <Container className='pb-28' style={{ maxWidth : "1000px" }}>
            <Row className='pt-16' >
                <Col lg={12} sm={12}  className='pb-16' >
                    <div className='text-3xl font-bold main_color p-3' >
                        {t("private_policy")}
                    </div>
                    <p>
                        {t("private_policy_text")}
                    </p>
                    
                </Col>
            </Row>

            <Row className='p-2' >
                <Col lg={12} sm={12} className='pb-16'>
                <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_1")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_1")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16' >
                    <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_2")}
                        </div>
                    </Divider>
                    <p>
                        
                        {t("private_policy_text_2")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16'>
                <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_3")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_3")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16'>
                    <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_4")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_4")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16'>
                    <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_5")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_5")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16'>
                    <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_6")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_6")}
                    </p>
                    
                </Col>
                <Col lg={12} sm={12} className='pb-16'>
                    <Divider style={{ borderColor: '#ffa60093' ,color:"ffa60093" }}>
                        <div className='text-xl font-bold main_color Ar' >
                        {t("private_policy_p_7")}
                        </div>
                    </Divider>
                    <p>
                        {t("private_policy_text_7")}
                    </p>
                    
                </Col>
            </Row>
            
        </Container>
    )

}