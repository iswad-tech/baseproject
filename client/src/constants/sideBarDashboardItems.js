import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from '@/constants/vars';

const adminRoutes = [
  {
    identifier: 'dashboard',
    title: 'Dashboard',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gauge',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  },
  {
    identifier: 'admin-blogs',
    title: 'Blogs',
    to: PAGE_ROUTES.ADMIN_BLOGS,
    icon: 'newspaper',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  },
  {
    identifier: 'admin-courses',
    title: 'Courses',
    to: PAGE_ROUTES.ADMIN_COURSES,
    icon: 'book',
    allowedGroups: [USER_GROUPS.APP_ADMIN]
  }
];

const clientRoutes = [
  {
    identifier: 'dashboard',
    title: 'Dashboard',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'gauge',
    allowedGroups: [USER_GROUPS.CLIENT]
  },
  {
    identifier: 'courses',
    title: 'Courses',
    to: PAGE_ROUTES.CLIENT_COURSES,
    icon: 'book',
    allowedGroups: [USER_GROUPS.CLIENT]
  },
  {
    identifier: 'projects',
    title: 'Projects',
    to: PAGE_ROUTES.CLIENT_PROJECTS,
    icon: 'folder-open',
    allowedGroups: [USER_GROUPS.CLIENT]
  },
  {
    identifier: 'sessions',
    title: 'Sessions',
    to: PAGE_ROUTES.CLIENT_SESSIONS,
    icon: 'calendar-alt',
    allowedGroups: [USER_GROUPS.CLIENT]
  },
  {
    identifier: 'transactions',
    title: 'Transactions',
    to: PAGE_ROUTES.DASHBOARD,
    icon: 'credit-card',
    allowedGroups: [USER_GROUPS.CLIENT]
  }
];

export const SIDE_BAR_DASHBOARD_ITEMS = [...adminRoutes, ...clientRoutes];
