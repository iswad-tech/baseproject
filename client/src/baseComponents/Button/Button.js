import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from './Button.module.scss';

const Button = ({ btnType = BUTTON_TYPES.primary, ...props }) => {
  return (
    <>
      {btnType === BUTTON_TYPES.primary ? (
        <BaseButton
          className="w-per-100 pX8 pY2 bgBrand bgBrandSecondaryOnHover textPrimary textSecondaryOnHover br-none brRadiusRounded f-b"
          {...props}>
          Button Primary
        </BaseButton>
      ) : (
        ''
      )}

      {btnType === BUTTON_TYPES.secondary ? (
        <BaseButton
          className="w-per-100 pX8 pY2 bgPrimary brBrandSecondaryOnHover textBrand textSecondaryBrandOnHover brBrand brSecondaryBrandOnHover brRadiusRounded f-b br-all-solid-3"
          {...props}>
          Button Primary
        </BaseButton>
      ) : (
        ''
      )}

      {btnType === BUTTON_TYPES.tertiary ? (
        <BaseButton
          className="w-per-100 pX8 pY2 bgPrimary bgBrandOnHover textBrand textPrimaryOnHover br-none brRadiusRounded f-b"
          {...props}>
          Button Primary
        </BaseButton>
      ) : (
        ''
      )}
    </>
  );
};

export default Button;
