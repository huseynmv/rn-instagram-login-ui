import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../localization/translations/en.json';
import az from '../localization/translations/az.json';

const resources = {
  en: {translation: en},
  az: {translation: az},
};

const detectLanguage = async () => {
  const storedLanguage = await AsyncStorage.getItem('user-language');
  if (storedLanguage) {
    return storedLanguage;
  }
  return 'en';
};

const initI18n = async () => {
  const language = await detectLanguage();

  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    lng: language,
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
