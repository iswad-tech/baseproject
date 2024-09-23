import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Heading } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { setModalType } from '@/reducers/general/modalType';
import { setModalProps } from '@/reducers/general/modalProps';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';
import { MODAL_TYPES } from '@/constants/devDesignVars';
import { BLOG_DETAIL_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from '../Card.module.scss';

const BlogInfo = ({
  src,
  writer,
  postDate,
  title,
  description,
  moreInfoUrl,
  slug = '',
  isAdminPage = false,
  imgAlt = 'Blog ISWAD',
  labels = { categories: [], tags: [] }
}) => {
  const dispatch = useDispatch();

  const [deleteIsConfirmed, setDeleteIsConfirmed] = useState(false);
  const [sendDeleteReq, setSendDeleteReq] = useState(false);

  const { data, error } = useApiCalls({
    sendReq: sendDeleteReq,
    setSendReq: setSendDeleteReq,
    method: 'DELETE',
    url: `${BLOG_DETAIL_API_ROUTE}${slug}/`,
    showLoading: true,
    showErrorMessage: true
  });
  useEffect(() => {
    if (data?.success) {
      dispatch(setModalProps({ message: `Blog titled as ${title} deleted successfully!` }));
      dispatch(setModalType(MODAL_TYPES['data-submitted']));
    }
  }, [data]);

  useEffect(() => {
    if (deleteIsConfirmed) {
      setSendDeleteReq(true);
      setTimeout(() => {
        setDeleteIsConfirmed(false);
      }, 10);
    }
  }, [deleteIsConfirmed]);

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

          <Div type="flex" distributedBetween vAlign="center">
            <Div>
              <Anchor
                anchorType={ANCHOR_TYPES.tertiary}
                internal
                className="f-b"
                to={
                  isAdminPage
                    ? `/app/admin-pages/admin-blogs/${moreInfoUrl}`
                    : `/blog/${moreInfoUrl}`
                }>
                Read More
              </Anchor>
            </Div>
            {isAdminPage ? (
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="width-px-30 height-px-30 mouse-hand"
                onClick={() => {
                  dispatch(
                    setModalProps({
                      message: `Are you sure you want to delete blog titled as ${title}?`,
                      setActionIsConfirmed: setDeleteIsConfirmed
                    })
                  );
                  dispatch(setModalType(MODAL_TYPES['prompt-message']));
                }}>
                <Icon type="trash" color="red" scale={1.5} />
              </Div>
            ) : (
              ''
            )}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default BlogInfo;
