import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Div from 'basedesign-iswad/dist/components/Div';
import Script from 'next/script';
import dynamic from 'next/dynamic';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { setElementsHeightStore } from '@/reducers/general/elementsHeightStore';

import Header from '@/baseComponents/PageParts/Header';
import Footer from '@/baseComponents/PageParts/Footer';

const ScrollToTop = dynamic(() => import('@/baseComponents/PageParts/ScrollToTop'), {
  ssr: false
});

import { setCurUserGroup } from '@/reducers/general/curUserGroup';

import styles from './WebPageContainer.module.scss';
import { USE_GOOGLE_ANALYTICS, GOOGLE_ANALYTICS_ID, USE_HOTJAR, HOTJAR_ID } from 'config';

const PageContainer = ({
  pageIdentifier = '',
  pageSubNavIdentifier = '',
  changesThePage = true,
  children
}) => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const footerRef = useRef();
  const elementsHeightStore = useSelector((state) => state.elementsHeightStore);
  const scrollPosition = useSelector((state) => state.scrollPosition);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setActiveMenu(pageIdentifier));
  }, [pageIdentifier]);

  useEffect(() => {
    dispatch(setActiveSubMenu(pageSubNavIdentifier));
  }, [pageSubNavIdentifier]);

  useEffect(() => {
    const localElementsHeightStore = { ...elementsHeightStore };
    if (headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = headerRef.current.clientHeight;
    }
    if (footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = footerRef.current.clientHeight;
    }
    if (!headerRef?.current?.clientHeight) {
      localElementsHeightStore['headerHeight'] = 0;
    }
    if (!footerRef?.current?.clientHeight) {
      localElementsHeightStore['footerHeight'] = 0;
    }
    dispatch(setElementsHeightStore(localElementsHeightStore));
  }, [headerRef?.current?.clientHeight, footerRef?.current?.clientHeight]);

  return (
    <>
      {USE_GOOGLE_ANALYTICS && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
          </Script>
        </>
      )}

      {USE_HOTJAR && (
        <Script>
          {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      )}
      <Div className={cx('bg-white')}>
        <Div type="flex" className={cx('global-main-container')}>
          <Div
            type="flex"
            direction="vertical"
            distributedBetween
            className={cx('width-per-100 min-height-vh-full')}>
            <Div ref={(el) => (headerRef.current = el)}>
              <Header hasStickyHeader={false} changesThePage={changesThePage} isAppPage={false} />
            </Div>
            <Div className={cx('flex--gr--1')}>{children}</Div>
            <Footer />
          </Div>
        </Div>
        {scrollPosition > 0 ? (
          <Div className={cx('pos-fix z-1000', styles.scrollToTopContainer)}>
            <ScrollToTop />
          </Div>
        ) : (
          ''
        )}
      </Div>
    </>
  );
};

export default PageContainer;
