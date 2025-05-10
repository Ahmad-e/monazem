import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../../images/logo2.png'

import Offcanvas from 'react-bootstrap/Offcanvas';
import {  useSelector } from 'react-redux';
// import {modeActions} from "../../store";
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import Setting from './setting';

function OffcanvasExample() {

  // const {setLanguage,toggleMode,logout} = modeActions;
  const mode = useSelector((state) => state.mode);
  const lang = useSelector((state) => state.language);
  console.log(lang)
  // const dispatch = useDispatch();
  const { t } = useTranslation();


  const expand = 'md'
  return (
    <>
        <Navbar bg={mode} data-bs-theme={mode} key={expand} expand={expand} className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={LOGO} className='logo_img' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            bg={mode} data-bs-theme={mode}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  className='main_color ' closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {t("AL_MONAZZEM")} 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
               
                <Setting />
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;