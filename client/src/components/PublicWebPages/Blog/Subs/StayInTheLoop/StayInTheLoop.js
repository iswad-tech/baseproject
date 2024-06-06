import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';
import InputWithButton from "@/baseComponents/FormComps/InputWithButton";


const StayInTheLoop = () => {
  return (
    <>
        <Div    
        className="p-all-temp-7 bg-theme-one text-secondary text-center width-px-1550">
        Stay in the Loop
        <div className="text-primary">Subscribe to our Blog updates</div>
        
        <InputWithButton>
        </InputWithButton>
        </Div>
    
         
    </>
  );
};

export default StayInTheLoop;
