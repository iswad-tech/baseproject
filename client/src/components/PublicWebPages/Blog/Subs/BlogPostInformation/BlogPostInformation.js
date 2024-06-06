import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';
import Anchor from "@/baseComponents/ReusableComps/Anchor";
import styles from './BlogPostInformation.module.scss';

const BlogPostInformation = () => {
  return (
    <>
      <Div>
        
        <div className="p-all-temp-7">
        <p>John Smith | June 1, 2024</p>
        </div>
        <Heading className="p-all-temp-7 text-primary f-s-px-20">Title of Blog Post Goes Here.</Heading>
        <p className="p-all-temp-7">Description of blog post will go here. Description of blog post will go here. Description of blog post will go here.</p>
        <Anchor anchorType="primary" className="mx2 p-all-temp-7" to="/">
        Read More
        </Anchor>
         
        </Div>
    </>
  );
};

export default BlogPostInformation;
