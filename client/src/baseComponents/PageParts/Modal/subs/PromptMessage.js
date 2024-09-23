import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import { setModalHeader } from '@/reducers/general/modalHeader';
import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

const PromptMessage = () => {
  const dispatch = useDispatch();

  const { message, setActionIsConfirmed } = useSelector((state) => state.modalProps);

  useEffect(() => {
    dispatch(setModalHeader('Confirm Action'));
  }, []);

  return (
    <>
      <Paragraph className="m-b-16">{message}</Paragraph>
      <Div type="flex">
        <Div className="m-r-20">
          <Button
            className={'width-px-150'}
            onClick={() => {
              if (setActionIsConfirmed) {
                setActionIsConfirmed(true);
              }
              clearModal(dispatch);
            }}>
            Yes
          </Button>
        </Div>
        <Div>
          <Button
            className={'width-px-150'}
            onClick={() => {
              clearModal(dispatch);
            }}>
            No
          </Button>
        </Div>
      </Div>
    </>
  );
};

export default PromptMessage;
