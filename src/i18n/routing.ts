import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk', 'ru', 'en'],
  defaultLocale: 'uk',
//   pathnames: {
//     '/': '/',
//     '/pathnames': {
//       uk: '/pfadnamen'
//     }
//   }
});