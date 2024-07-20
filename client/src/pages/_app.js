import React from 'react';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';

import { store } from '@/root/src/store';

const BaseTemplate = dynamic(() => import('@/baseComponents/PageParts/BaseTemplate'), {
  ssr: false
});

import 'basedesign-iswad/dist/styles.min.css';
import '@/styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <BaseTemplate>
        <Component {...pageProps} />
      </BaseTemplate>
    </Provider>
  );
};

export default MyApp;
