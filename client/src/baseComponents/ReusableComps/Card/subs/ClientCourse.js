import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Anchor from '@/baseComponents/ReusableComps/Anchor';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Icon from '@/baseComponents/ReusableComps/Icon';
import Button from '@/baseComponents/ReusableComps/Button';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import styles from '../Card.module.scss';
import { COLORS } from '@/constants/vars';

const ClientCourse = ({
  src = '',
  title = '',
  hours = '',
  description = '',
  price = 0,
  slug = '',
  imgAlt = '',
  isAdminPage = false
}) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one">
        <Anchor
          to={
            !isAdminPage
              ? `/app/client-pages/courses/${slug}`
              : `/app/admin-pages/admin-courses/${slug}`
          }
          anchorType={ANCHOR_TYPES.noEffect}>
          <Div className="width-per-100">
            <AppImage src={src} heightOverWidthAsprctRatio={1080 / 1920} alt={imgAlt} />
          </Div>
        </Anchor>
        <Div className="p-all-temp-7">
          <Heading
            type={5}
            className="text-black m-y-temp-4 three-lines height-px-100 text-gray-dark">
            <Anchor
              to={
                !isAdminPage
                  ? `/app/client-pages/courses/${slug}`
                  : `/app/admin-pages/admin-courses/${slug}`
              }
              anchorType={ANCHOR_TYPES.noEffect}
              className="text-gray-dark">
              {title}
            </Anchor>
          </Heading>

          <Paragraph className="m-b-temp-7 three-lines height-px-100">{description}</Paragraph>

          <Div type="flex" vAlign="center">
            <Div className="m-r-8">
              <Icon type="clock" width={20} height={20} color={COLORS['gray-dark']} />
            </Div>
            <Div>One-on-One Sessions: {hours} Hours</Div>
          </Div>
          <Div type="flex" vAlign="center" className="m-t-16">
            <Div className="m-r-8">
              <Icon type="money-bill" width={20} height={20} color={COLORS['gray-dark']} />
            </Div>
            <Div>Price: CAD ${price}</Div>
          </Div>

          <Div className="m-t-temp-7">
            <Anchor
              anchorType={ANCHOR_TYPES.tertiary}
              internal
              className="f-b"
              to={
                !isAdminPage
                  ? `/app/client-pages/courses/${slug}`
                  : `/app/admin-pages/admin-courses/${slug}`
              }>
              Read More
            </Anchor>
          </Div>

          {!isAdminPage ? (
            <Div className="m-t-temp-7">
              <Button>Register</Button>
            </Div>
          ) : (
            ''
          )}
        </Div>
      </Div>
    </>
  );
};

export default ClientCourse;
