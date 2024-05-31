import React from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex  items-center">
        <img src="/assets/bosta-logo.png" alt="Bosta Logo" className="h-16" />
        <p className="text-primary text-3xl text-bold  mb-1">{t("Bosta")}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="p-4 text-lg font-semibold">{t("homePage")}</p>
        <p className="p-4 text-lg font-semibold">{t("pricing")}</p>
        <p className="p-4 text-lg font-semibold">{t("contactSales")}</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <button className="p-4 text-lg font-semibold">
          {t("trackShipment")}
        </button>
        <p className="p-4 text-lg font-semibold">{t("login")}</p>
        <button
          className="p-4 text-primary text-lg font-semibold"
          onClick={handleLanguageChange}
        >
          {t("languageButton")}
        </button>
      </div>
    </div>
  );
};

export default Header;
