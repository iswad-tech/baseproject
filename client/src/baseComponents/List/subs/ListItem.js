import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../List.module.scss';

const ListItem = ({ item, isIconWhite, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="top" className="mb1" {...props}>
        <Div>
          <Div className={cx('w-px-20 height-px-20 pos-rel')}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="w-px-20 height-px-20 pos-abs pos-abs--lt">
              <Icon
                type="check-mark"
                color={isIconWhite ? 'white' : COLORS.brandSecondary}
                scale={0.9}
              />
            </Div>
          </Div>
        </Div>
        <Div className="ml1">
          <Div className={cx('fs-px-12', styles.gradientText)}>{item}</Div>
        </Div>
      </Div>
    </>
  );
};

export default ListItem;
