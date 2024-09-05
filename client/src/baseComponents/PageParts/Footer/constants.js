import { LIST_OF_ICONS, PNG_ICON_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

export const COMPANY_LINKS = [{ title: 'Home', url: PAGE_ROUTES.HOME }];

export const LEARN_MORE_LINKS = [{ title: 'Blog', url: PAGE_ROUTES.BLOG }];

export const CONTACT = [
  { icon: LIST_OF_ICONS.phone, value: '+1(226)977-0855' },
  { icon: LIST_OF_ICONS.envelope, value: 'info@iswad.tech' }
];

export const FOLLOW = [
  { icon: PNG_ICON_TYPES.facebook, url: 'https://www.facebook.com/iswad.tech/' }
];
