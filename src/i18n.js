import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "admin": "Administrative procedures",
          "guide": "guide",
          "schedule": "schedule",
          "structure": "structure",
          "National postal operator": "National postal operator of the Republic of Belarus",
          "Buy Belarusian goods": "Buy Belarusian goods at shop.belpost.by",
          "Developed by": "Developed by",
        }
      },
      ru: {
        translation: {
          "admin": "Административные процедуры",
          "guide": "Руководство",
          "schedule": "график приЁма",
          "structure": "Структура",
          "National postal operator": "Национальный оператор почтовой связи Республики Беларусь",
          "Buy Belarusian goods": "Покупайте белорусские товары на shop.belpost.by",
          "Developed by": "Разработано компанией",
        }
      }
    },
    lng: "ru", 
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false 
    }
  });