import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          common: {
            email: 'Email',
            signIn: 'Sign in',
            signUp: 'Sign up',
            home: 'Home',
            password: 'Password',
            username: 'Username',
            newPost: 'New Post',
            loading: 'Loading...',
          },
          auth: {
            needAccount: 'Need an account?',
            haveAccount: 'Have an account?',
          },
          globalFeed: {
            title: 'Global Feed',
            bannerTitle: 'Medium clone',
            bannerDescription: 'A place to share knowledge.',
          },
          article: {
            title: 'Article',
            readMore: 'Read more...',
          },
          errors: {
            common: 'Some error happened',
          },
        },
      },
    },
  })

export default i18n
