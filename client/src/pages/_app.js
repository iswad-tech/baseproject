import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/root/src/store';

// import BaseTemplate from '@/baseComponents/BaseTemplate';
import BaseTemplateSimple from '@/baseComponents/BaseTemplateSimple';

import 'basedesign-iswad/dist/styles.min.css';
import '@/styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <BaseTemplateSimple>
        <Component {...pageProps} />
      </BaseTemplateSimple>
    </Provider>
  );
};

export default MyApp;
