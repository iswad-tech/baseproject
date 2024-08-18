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
  isAdminPage = false,
  imgAlt = 'Blog ISWAD',
  labels = { categories: [], tags: [] }
}) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one">
        <Anchor
          anchorType={ANCHOR_TYPES.noEffect}
          internal
          className="f-b"
          to={isAdminPage ? `/app/admin-pages/admin-blogs/${moreInfoUrl}` : `/blog/${moreInfoUrl}`}>
          <AppImage src={src} heightOverWidthAsprctRatio={1080 / 1920} alt={imgAlt} />
        </Anchor>
        <Div className="p-all-temp-7">
          <Div>
            {writer} | {postDate}
          </Div>

          <Anchor
            anchorType={ANCHOR_TYPES.noEffect}
            internal
            className="f-b"
            to={
              isAdminPage ? `/app/admin-pages/admin-blogs/${moreInfoUrl}` : `/blog/${moreInfoUrl}`
            }>
            <Heading type={5} className="text-black m-y-temp-7 one-line">
              {title}
            </Heading>
          </Anchor>

          <Paragraph className="m-b-16 three-lines">{description}</Paragraph>

          <Div type="flex" className="m-b-16 flex--wrap f-s-regular height-px-40 of-hidden">
            {labels?.tags?.map((item, idx) => (
              <Div
                key={idx}
                className="text-gray-dark br-rad-sm m-r-4 m-b-4 br-rad-sm one-line text-center f-b">
                #{item}
              </Div>
            ))}
          </Div>

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
