import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Close from '@/baseComponents/ReusableComps/Close';
import AppImage from '@/baseComponents/ReusableComps/AppImage';

import { COLORS } from '@/constants/vars';

import styles from '../../ImagePicker.module.scss';

const DefaultImagePreview = ({
  src,
  setFile,
  setSrc,
  setFileName,
  inputFileField,
  setInitialSrc
}) => {
  return (
    <>
      {src && (
        <Div
          type="flex"
          direction="vertical"
          className={cx('ml1 of-hidden width-px-100 height-px-100', styles.previewContainer)}>
          <Close
            barColor={COLORS['theme-one']}
            barHeight="25px"
            iconScale={0.8}
            iconCircleSize="15px"
            onClick={() => {
              setFile('');
              setSrc('');
              setFileName('');
              if (setInitialSrc) {
                setInitialSrc('');
              }
              inputFileField.current.value = null;
            }}
          />
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-rel width-per-100 height-px-70')}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx('pos-rel mouse-hand of-hidden', styles.imagePreviewContainer)}>
              <AppImage width={90} height={60} src={src} objectFit="contain" />
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
};

export default DefaultImagePreview;
