import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ btnType = BUTTON_TYPES.primary, btnText, className, children, ...props }) => {
  return (
    <>
      {btnType === BUTTON_TYPES.primary ? (
        <BaseButton
          className={cx(
            'w-per-100 pX8 pY2 bgBrand bgBrandSecondaryOnHover textWhite textSecondaryOnHover br-none brRadiusRounded f-b',
            className
          )}
          {...props}>
          {children}
        </BaseButton>
      ) : (
        ''
      )}

      {btnType === BUTTON_TYPES.secondary ? (
        <BaseButton
          className="w-per-100 pX8 pY2 bgPrimary brBrandSecondaryOnHover textBrand textSecondaryBrandOnHover brBrand brSecondaryBrandOnHover brRadiusRounded f-b br-all-solid-3"
          {...props}>
          {children}
        </BaseButton>
      ) : (
        ''
      )}

      {btnType === BUTTON_TYPES.tertiary ? (
        <BaseButton
          className="w-per-100 pX8 pY2 bgPrimary bgBrandOnHover textBrand textPrimaryOnHover br-none brRadiusRounded f-b"
          {...props}>
          {children}
        </BaseButton>
      ) : (
        ''
      )}
    </>
  );
};

export default Button;
