import { LIST_OF_ICONS, PNG_ICON_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

export const COMPANY_LINKS = [
  { title: 'Home', url: PAGE_ROUTES.HOME },
  { title: 'About Us', url: PAGE_ROUTES.ABOUT_US },
  { title: 'Case Studies', url: PAGE_ROUTES.CASE_STUDIES }
  // { title: 'Our Mission', url: PAGE_ROUTES.OUR_MISSION },
  // { title: 'Careers', url: PAGE_ROUTES.CAREERS },
  // { title: 'Terms & Conditions', url: PAGE_ROUTES.TERMS }
];

export const LEARN_MORE_LINKS = [
  // { title: 'Our Services', url: PAGE_ROUTES.OUR_SERVICES },
  { title: 'MVP Development', url: `${PAGE_ROUTES.OUR_SERVICES_MVP_DEVELOPMENT}` },
  { title: 'App Development', url: `${PAGE_ROUTES.OUR_SERVICES_WEB_APP_DEVELOPMENT}` },
  { title: 'Counselling', url: `${PAGE_ROUTES.OUR_SERVICES_COUNSELLING}` },
  { title: 'Branding', url: `${PAGE_ROUTES.OUR_SERVICES_BRANDING}` },
  { title: 'Team Augmentation', url: `${PAGE_ROUTES.OUR_SERVICES_TEAM_AUGMENTATION}` }
  // { title: 'Blog', url: PAGE_ROUTES.BLOG },
  // { title: 'FAQ', url: PAGE_ROUTES.FAQ }
];

export const CONTACT = [
  { icon: LIST_OF_ICONS.phone, value: '+1(226)977-0855' },
  { icon: LIST_OF_ICONS.envelope, value: 'info@iswad.tech' }
];

export const FOLLOW = [
  { icon: PNG_ICON_TYPES.instagram, url: 'https://www.instagram.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.facebook, url: 'https://www.facebook.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.linkedIn, url: 'https://ca.linkedin.com/company/iswadtech' }
];
