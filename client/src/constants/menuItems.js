import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const generalItems = [
  {
    identifier: 'home',
    title: 'Home',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: false,
    showInDesktop: false,
    showInMobile: false,
    isInApp: false,
    isInWeb: true
  },
  {
    identifier: 'blog',
    title: 'Blog',
    to: PAGE_ROUTES.BLOG,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true,
    isInApp: false,
    isInWeb: true
  }
];

export const MENU_ITEMS = [...generalItems];

export const SUB_MENU_ITEMS = {
  'our-services': [
    {
      identifier: 'mvp-development',
      title: 'MVP Development',
      to: PAGE_ROUTES.OUR_SERVICES_MVP_DEVELOPMENT
    },

    {
      identifier: 'web-app-development',
      title: 'Customized Web/Mobile App Development',
      to: PAGE_ROUTES.OUR_SERVICES_WEB_APP_DEVELOPMENT
    },

    {
      identifier: 'branding',
      title: 'Website Development & Branding',
      to: PAGE_ROUTES.OUR_SERVICES_BRANDING
    },

    {
      identifier: 'counselling',
      title: 'Counselling & Coaching',
      to: PAGE_ROUTES.OUR_SERVICES_COUNSELLING
    },

    {
      identifier: 'team-augmentation',
      title: 'Team Augmentation',
      to: PAGE_ROUTES.OUR_SERVICES_TEAM_AUGMENTATION
    }
  ]
};
