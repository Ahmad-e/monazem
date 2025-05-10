import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import stor from './store';
import Cookies from 'js-cookie';
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import English from './language/En.json';
import Arabic from './language/Ar.json';
import Turki from './language/Tu.json';

const resources = {
  En: {
    translation:English
  },
  Ar:{
    translation:Arabic
  },
  Tu:{
    translation:Turki
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: (Cookies.get("lang_mode") ? (Cookies.get("lang_mode")) :"En" ), 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stor}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);