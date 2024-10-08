import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from '@/constants/vars';

const otherAdminItems = [
  {
    identifier: 'settings',
    title: 'Settigns',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gear',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

const otherClientItems = [
  {
    identifier: 'settings',
    title: 'Settigns',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gear',
    allowedGroups: [USER_GROUPS.CLIENT]
  }
];

export const OTHER_ITEMS = [...otherAdminItems, ...otherClientItems];
