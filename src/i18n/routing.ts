import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'uk', 'en'],
  defaultLocale: 'uk',
//   pathnames: {
//     '/': '/',
//     '/pathnames': {
//       uk: '/pfadnamen'
//     }
//   }
});