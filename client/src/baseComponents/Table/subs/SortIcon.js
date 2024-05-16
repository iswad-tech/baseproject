import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../Table.module.scss';

const SortIcon = ({ isAsc, isDesc, notSorted, className }) => {
  return (
    <>
      {isAsc && (
        <Div className={cx('mr2', styles.downIcon, className)}>
          <Icon type="angles-up" />
        </Div>
      )}
      {isDesc && (
        <Div className={cx('mr2', styles.upIcon, className)}>
          <Icon type="angles-up" />
        </Div>
      )}
      {notSorted && (
        <Div
          typw="flex"
          direction="vertical"
          vAlign="center"
          hAlign="center"
          className={cx('mr2', className)}>
          <Icon type="angles-up" color={COLORS.inverse} />
          <Icon type="angles-up" color={COLORS.inverse} />
        </Div>
      )}
    </>
  );
};

export default SortIcon;
