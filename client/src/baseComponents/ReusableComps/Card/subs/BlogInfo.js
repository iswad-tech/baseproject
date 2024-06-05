import React from "react";
import cx from "classnames";
import { Card, Div,Heading } from "basedesign-iswad";
import Anchor from "../../Anchor";

import styles from "../Card.module.scss";

const BlogInfo = () => {
  return (
    <>
    <Card>
      <Div>
      <div className="p-all-temp-7 width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one">
        <p>John Smith | June 1, 2024</p>
        <Heading className="p-all-temp-7 text-primary f-s-px-20">Title of Blog Post Goes Here.</Heading>
        <p className="p-all-temp-7">Description of blog post will go here. Description of blog post will go here. Description of blog post will go here.</p>
        <Anchor anchorType="primary" className="mx2 p-all-temp-7" to="/">
        Read More
        </Anchor>
        </div>
      </Div>
      </Card>
    
    </>
  );
};

export default BlogInfo;
