import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const ProgressBar = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const currentStatus = useSelector(
    (state) => state.shipment.shipmentInfo.currentStatus
  );
  const setbarColor = (status) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-500";
      case "CANCELLED":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };
  const setStages = (status) => {
    switch (status) {
      case "DELIVERED":
        return [true, true, true, true];
      case "CANCELLED":
        return [true, true, true, false];
      case "PACKAGE_RECEIVED":
        return [true, true, false, false];
      case "TICKET_CREATED":
        return [true, false, false, false];
      case "OUT_FOR_DELIVERY":
        return [true, true, true, false];
      case "NOT_YET_SHIPPED":
        return [true, false, false, false];
      case "AVAILABLE_FOR_PICKUP":
        return [true, true, false, false];
      case "IN_TRANSIT":
        return [true, true, true, false];
      case "DELIVERY_FAILED":
        return [true, true, true, false];
      case "DELIVERED_TO_SENDER":
        return [true, true, true, false];
      default:
        return [false, false, false, false];
    }
  };
  const barColor = setbarColor(currentStatus.state);
  const completedStages = setStages(currentStatus.state);

  return (
    <div className="px-16 py-10">
      <div className=" relative flex">
        <div
          className={
            currentLanguage === "en"
              ? "absolute left-0 -translate-y-1/2 top-2/4"
              : "absolute right-0 -translate-y-1/2 top-2/4"
          }
        >
          {completedStages[0] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[0]
                  ? `size-8 ${barColor} border rounded-full text-white`
                  : `size-8 bg-gray-300 border rounded-full text-white`
              }
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[0]
                  ? `size-8 ${barColor} border rounded-full text-white`
                  : `size-8 bg-gray-300 border rounded-full text-white`
              }
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          )}

          <p
            className={
              currentLanguage === "en"
                ? "absolute -translate-x-1/4 w-max-content"
                : "absolute translate-x-1/4 w-max-content"
            }
          >
            {t("TICKET_CREATED")}
          </p>
        </div>
        <div
          className={
            completedStages[1]
              ? `h-1 w-1/3 ${barColor}`
              : `h-1 w-1/3 bg-gray-300`
          }
        ></div>
        <div
          className={
            currentLanguage === "en"
              ? "absolute left-25p -translate-y-1/2 top-2/4"
              : "absolute right-25p -translate-y-1/2 top-2/4"
          }
        >
          {completedStages[2] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[1]
                  ? `size-8 ${barColor} border rounded-full text-white`
                  : `size-8 bg-gray-300 border rounded-full text-white`
              }
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[1]
                  ? `size-8 ${barColor} border rounded-full text-white p-1`
                  : `size-8 bg-gray-300 border rounded-full text-white p-1`
              }
            >
              <path
                fill-rule="evenodd"
                d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
                clip-rule="evenodd"
              />
              <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
            </svg>
          )}

          <p
            className={
              currentLanguage === "en"
                ? "absolute -translate-x-1/4 w-max-content"
                : "absolute translate-x-1/4 w-max-content"
            }
          >
            {t("SHIPPED")}
          </p>
        </div>
        <div
          className={
            completedStages[2]
              ? `h-1 w-1/3 ${barColor}`
              : `h-1 w-1/3 bg-gray-300`
          }
        ></div>
        <div
          className={
            currentLanguage === "en"
              ? "absolute left-75p -translate-y-1/2 top-2/4"
              : "absolute right-75p -translate-y-1/2 top-2/4"
          }
        >
          {completedStages[3] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-8 ${barColor} border rounded-full text-white`}
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[2]
                  ? `size-8 ${barColor} border rounded-full text-white p-1`
                  : `size-8 bg-gray-300 border rounded-full text-white p-1`
              }
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          )}

          <p
            className={
              currentLanguage === "en"
                ? "absolute -translate-x-1/4 w-max-content"
                : "absolute translate-x-1/4 w-max-content"
            }
          >
            {t("OUT_FOR_DELIVERY")}
          </p>
        </div>
        <div
          className={
            completedStages[3]
              ? `h-1 w-1/3 ${barColor}`
              : `h-1 w-1/3 bg-gray-300`
          }
        ></div>
        <div
          className={
            currentLanguage === "en"
              ? "absolute left-100p -translate-y-1/2 top-2/4"
              : "absolute right-100p -translate-y-1/2 top-2/4"
          }
        >
          {completedStages[3] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[3]
                  ? `size-8 ${barColor} border rounded-full text-white`
                  : `size-8 bg-gray-300 border rounded-full text-white`
              }
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                completedStages[3]
                  ? `size-8 ${barColor} border rounded-full text-white p-1`
                  : `size-8 bg-gray-300 border rounded-full text-white p-1`
              }
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          )}

          <p
            className={
              currentLanguage === "en"
                ? "absolute -translate-x-1/4 w-max-content"
                : "absolute translate-x-2/4 w-max-content"
            }
          >
            {t("DELIVERED")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
