import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import uk from '../messages/uk.json';
import ru from '../messages/ru.json';

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const messagesMap = {
    uk,
    ru,
  }
  return {
    locale,
    // messages: (await import(`../../messages/${locale}.json`)).default
    messages: messagesMap[locale as keyof typeof messagesMap] ,
  };
});