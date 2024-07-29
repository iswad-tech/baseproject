import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { COMPANY_LINKS } from '../constants';
import styles from '../Footer.module.scss';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

const Company = () => {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        className="global-font-title f-b height-px-30 width-per-100 height-px-30">
        Company
      </Div>
      <Div className={cx('width-per-100', styles.heightForText)}>
        {COMPANY_LINKS?.length
          ? COMPANY_LINKS?.map((item, idx) => (
              <Div type="flex" key={idx} className="m-b-8">
                <Anchor
                  to={item?.url}
                  internal
                  anchorType={ANCHOR_TYPES.noEffect}
                  className={'text-white'}>
                  <Div type="flex" vAlign="center" className="height-px-30">
                    {item?.title}
                  </Div>
                </Anchor>
              </Div>
            ))
          : ''}
      </Div>
    </>
  );
};

export default Company;
