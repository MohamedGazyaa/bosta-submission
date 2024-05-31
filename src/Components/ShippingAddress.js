import React from "react";
import { useTranslation } from "react-i18next";

const ShippingAddress = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="p-2">{t("ShippingAddress")}</h1>
      <p className="bg-gray-50 py-8 border rounded-md p-4 flex items-center justify-center">
        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22، القاهرة
      </p>
    </div>
  );
};

export default ShippingAddress;
