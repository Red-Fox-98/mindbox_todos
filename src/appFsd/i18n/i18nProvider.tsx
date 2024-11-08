import React, { ReactNode } from "react";
import i18n from "./config";
import { I18nextProvider } from "react-i18next";

export const getTranslation = (code: string): string => {
  const { t } = i18n;
  return t(code);
};

export const changeLanguage = (lang: "ru" | "en" | "ch"): void => {
  i18n.changeLanguage(lang);
};

const I18nProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
