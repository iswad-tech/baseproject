import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Div } from 'basedesign-iswad';
// import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesUp,
  faAngleDown,
  faAngleUp,
  faSearch,
  faClose,
  faUpload,
  faCirclePlus,
  faCircleMinus,
  faCircleCheck,
  faAngleLeft,
  faAngleRight,
  faCheck,
  faPhone,
  faEnvelope,
  faLightbulb,
  faPenRuler,
  faCogs,
  faRocket,
  faComments,
  faChartBar,
  faSyncAlt,
  faPaintBrush,
  faCode,
  faMobileAlt,
  faServer,
  faDatabase,
  faCube,
  faCircleUser,
  faGauge,
  faGear,
  faRightFromBracket,
  faNewspaper,
  faCloudArrowUp,
  faEye,
  faBook,
  faFolderOpen,
  faCalendarAlt,
  faCreditCard,
  faClock,
  faMoneyBill,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
// library.add(fab);

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
function Icon({
  type = 'close',
  color = 'black',
  width = '16px',
  height = '16px',
  scale,
  isBlock = true,
  className,
  ...props
}) {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowIcon(true);
    }
  }, []);
  let iconTypes = {
    'angles-up': (
      <FontAwesomeIcon
        icon={faAnglesUp}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'angle-down': (
      <FontAwesomeIcon
        icon={faAngleDown}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'angle-up': (
      <FontAwesomeIcon
        icon={faAngleUp}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    search: (
      <FontAwesomeIcon
        icon={faSearch}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    close: (
      <FontAwesomeIcon
        icon={faClose}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    upload: (
      <FontAwesomeIcon
        icon={faCloudArrowUp}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'instagram-fill': (
      <FontAwesomeIcon
        icon={faSquareInstagram}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'circle-plus': (
      <FontAwesomeIcon
        icon={faCirclePlus}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'circle-minus': (
      <FontAwesomeIcon
        icon={faCircleMinus}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'circle-check': (
      <FontAwesomeIcon
        icon={faCircleCheck}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'angle-left': (
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'angle-right': (
      <FontAwesomeIcon
        icon={faAngleRight}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    check: (
      <FontAwesomeIcon
        icon={faCheck}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    phone: (
      <FontAwesomeIcon
        icon={faPhone}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    envelope: (
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'light-bulb': (
      <FontAwesomeIcon
        icon={faLightbulb}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'pen-ruler': (
      <FontAwesomeIcon
        icon={faPenRuler}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    cogs: (
      <FontAwesomeIcon
        icon={faCogs}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    rocket: (
      <FontAwesomeIcon
        icon={faRocket}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    comments: (
      <FontAwesomeIcon
        icon={faComments}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'chart-bar': (
      <FontAwesomeIcon
        icon={faChartBar}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'sync-alt': (
      <FontAwesomeIcon
        icon={faSyncAlt}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'paint-brush': (
      <FontAwesomeIcon
        icon={faPaintBrush}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    code: (
      <FontAwesomeIcon
        icon={faCode}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'mobile-alt': (
      <FontAwesomeIcon
        icon={faMobileAlt}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    server: (
      <FontAwesomeIcon
        icon={faServer}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    database: (
      <FontAwesomeIcon
        icon={faDatabase}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    cube: (
      <FontAwesomeIcon
        icon={faCube}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    linux: (
      <FontAwesomeIcon
        icon={faLinux}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'circle-user': (
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    gauge: (
      <FontAwesomeIcon
        icon={faGauge}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    gear: (
      <FontAwesomeIcon
        icon={faGear}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'right-from-bracket': (
      <FontAwesomeIcon
        icon={faRightFromBracket}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    newspaper: (
      <FontAwesomeIcon
        icon={faNewspaper}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    eye: (
      <FontAwesomeIcon
        icon={faEye}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    book: (
      <FontAwesomeIcon
        icon={faBook}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'folder-open': (
      <FontAwesomeIcon
        icon={faFolderOpen}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'calendar-alt': (
      <FontAwesomeIcon
        icon={faCalendarAlt}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'credit-card': (
      <FontAwesomeIcon
        icon={faCreditCard}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    clock: (
      <FontAwesomeIcon
        icon={faClock}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    'money-bill': (
      <FontAwesomeIcon
        icon={faMoneyBill}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    ),
    trash: (
      <FontAwesomeIcon
        icon={faTrash}
        style={{ color, width, height, transform: `scale(${scale})` }}
      />
    )
  };

  iconTypes['dashboard'] = (
    <Dashboard fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );

  return (
    <>
      {isBlock && (
        <Div type="flex" hAlign="center" vAlign="center" className={cx(className)} {...props}>
          {showIcon && iconTypes[type]}
        </Div>
      )}
      {!isBlock && showIcon ? iconTypes[type] : ''}
    </>
  );
}

export default Icon;
