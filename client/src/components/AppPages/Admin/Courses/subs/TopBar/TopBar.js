import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import Button from '@/baseComponents/ReusableComps/Button';
import Back from '@/baseComponents/ReusableComps/Back';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import styles from './TopBar.module.scss';
import { PAGE_ROUTES } from '@/constants/vars';

const TopBar = () => {
  return (
    <>
      <Div type="flex" vAlign="center" distributedBetween className="width-per-100">
        <Div className="width-per-100 max-width-px-200">
          <Anchor to={PAGE_ROUTES.ADMIN_CREATE_COURSE}>
            <Button>Add New Course</Button>
          </Anchor>
        </Div>

        <Div>
          <Back />
        </Div>
      </Div>
    </>
  );
};

export default TopBar;
