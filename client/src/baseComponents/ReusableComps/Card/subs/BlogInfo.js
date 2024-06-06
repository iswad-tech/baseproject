import React from "react";
import cx from "classnames";
import { Card, Div,Heading } from "basedesign-iswad";
import Anchor from "../../Anchor";

import styles from "../Card.module.scss";

const BlogInfo = () => {
  return (
    <>
    <Div className="width-per-100 bg-white br-rad-3xl of-hidden p-all-temp-7 box-shadow-type-one">
    <p>John Smith | June 1, 2024</p>
        <Heading type={4} className="text-black m-b-temp-7 two-lines">
        Title of Blog goes Here.
        </Heading>
        <Div className="br-rad-3xl of-hidden m-b-temp-7">
        <p className="p-all-temp-7">Description of blog post will go here. Description of blog post will go here. Description of blog post will go here.</p>
        </Div>
        <Div>
        <Anchor anchorType="primary" className="mx2 p-all-temp-7" to="/">
        Read More
        </Anchor>
        </Div>
      </Div>
   
    
    </>
  );
};

export default BlogInfo;
