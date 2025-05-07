import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'uk'],
  defaultLocale: 'uk',
//   pathnames: {
//     '/': '/',
//     '/pathnames': {
//       uk: '/pfadnamen'
//     }
//   }
});