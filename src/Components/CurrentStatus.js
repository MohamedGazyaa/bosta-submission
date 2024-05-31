import React from "react";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";

const CurrentStatus = () => {
  const { t } = useTranslation();
  const status = useSelector((state) => state.shipment.status);
  const shipmentId = useSelector((state) => state.shipment.shipmentInfo.id);
  const currentStatus = useSelector(
    (state) => state.shipment.shipmentInfo.currentStatus
  );
  const provider = useSelector((state) => state.shipment.shipmentInfo.provider);
  const promisedDate = useSelector(
    (state) => state.shipment.shipmentInfo.promisedDate
  );

  const formatDateTime = (timestamp) => {
    const date = parseISO(timestamp);
    return format(date, "d/M/yyyy 'at' h:mma");
  };
  const formatDate = (timestamp) => {
    const date = parseISO(timestamp);
    return format(date, "d/M/yyyy");
  };
  const formatDay = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const styleState = (state) => {
    switch (state) {
      case "DELIVERED":
        return "text-green-500";
      case "CANCELLED":
        return "text-red-500";
      case "DELIVERY_FAILED":
        return "text-red-500";
      case "DELIVERED_TO_SENDER":
        return "text-red-500";
      default:
        return "text-yellow-500";
    }
  };

  return (
    <div className="flex justify-between border-b py-6 px-8">
      <div>
        <p>
          {t("ShipmentNumber")}: {shipmentId}
        </p>
        <p className={`mt-2 ${styleState(currentStatus.state)}`}>
          {status === "succeeded" && t(currentStatus.state)}
        </p>
      </div>
      <div>
        <p>{t('lastUpdate')}</p>

          {status === "succeeded" && (
            <div className="flex mt-2">
            <p>{t(formatDay(currentStatus.timestamp))}</p>
            <span className="mx-1"></span>
            <p>{formatDateTime(currentStatus.timestamp)}</p>
            </div>)}

      </div>
      <div>
        <p>{t('provider')}</p>
        <p className="mt-2">{status === "succeeded" && provider}</p>
      </div>
      <div>
        <p>{t('deliverBy')}</p>
        {status === "succeeded" && (
            <div className="flex mt-2">
            <p>{t(formatDay(promisedDate ))}</p>
            <span className="mx-1"></span>
            <p>{formatDate(promisedDate )}</p>
            </div>)}
      </div>
    </div>
  );
};

export default CurrentStatus;
