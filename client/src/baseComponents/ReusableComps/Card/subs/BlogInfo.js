import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import styles from '../Card.module.scss';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

const BlogInfo = ({
  src,
  writer,
  postDate,
  title,
  description,
  moreInfoUrl,
  isAdminPage = false
}) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one">
        <AppImage src={src} heightOverWidthAsprctRatio={0.5} />
        <Div className="p-all-temp-7">
          <Div>
            {writer} | {postDate}
          </Div>
          <Heading type={5} className="text-black m-y-temp-7 one-line">
            {title}
          </Heading>

          <Paragraph className="m-b-temp-7 three-lines">{description}</Paragraph>

          <Div>
            <Anchor
              anchorType={ANCHOR_TYPES.tertiary}
              internal
              className="f-b"
              to={
                isAdminPage ? `/app/admin-pages/admin-blogs/${moreInfoUrl}` : `/blog/${moreInfoUrl}`
              }>
              Read More
            </Anchor>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default BlogInfo;
