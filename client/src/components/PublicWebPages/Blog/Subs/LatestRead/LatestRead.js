import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';
import Anchor from "@/baseComponents/ReusableComps/Anchor";
import styles from './LatestRead.module.scss';

const LatestRead = () => {
  return (
    <>
      <Div>
      <div>
         <Div className="p-all-temp-7 text-primary f-s-px-40 ">Latest Read</Div>
         <Anchor anchorType="primary" className="p-all-temp-7 text-primary" to="/">Learn More Here.</Anchor>
         </div>
    
        </Div>
    </>
  );
};

export default LatestRead;
