
import 'bootstrap/dist/css/bootstrap.min.css';
import './SVGs/style.css'
import './components/style.css'
import './guest/style.css';

import './App.css';

import LandingPage from './guest/landing/index';
import Signin from './guest/login'
import Register from './guest/register'

import NavBar from './components/navbar/index'
import Footer from './components/footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  useSelector } from 'react-redux';
import {  ConfigProvider , theme } from 'antd';


import "@fontsource/cairo"; 
import "@fontsource/cairo/400.css";

function App() {

  const darkTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 15,
      },
    },
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 16,
      },
    },
    
    palette: {
      mode: 'light',
    },
  });
  const mode = useSelector((state) => state.mode);
  const language = useSelector((state) => state.language);


  return (
    <div>
      
        <ConfigProvider
          theme={{
            algorithm: mode==="dark" ? theme.darkAlgorithm : theme.compactAlgorithm
          }}
          >
          <BrowserRouter>
            <NavBar />
            
            <div dir={language==="Ar" ? ("rtl") :("ltr") }  className={"text-lg App "+mode+"  "+language }>
              <Routes>
                <Route>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="login" element={<Signin />} />
                  <Route path="register" element={<Register />} />

                  
                  {/* <Route path="admin" element={<AdminApp />} >
                    <Route path="" element={<AdminHome />} />
                    <Route path="users" element={<AdminUsers />} />
                    
                  </Route> */}

                  
                </Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </ConfigProvider>
    </div>
    
  );
}

export default App;
