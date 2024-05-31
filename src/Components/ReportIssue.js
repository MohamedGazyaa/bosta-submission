import React from "react";
import { useTranslation } from "react-i18next";

const ReportIssue = () => {

  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-20 border rounded-md mt-8 px-4 py-8">
      <div className="flex flex-col justify-center items-center">
        <p>{t('issueMessage')}</p>
        <button className="bg-primary p-2 border rounded-lg text-white mt-2">{t('issueButton')}</button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-32 w-24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    </div>
  );
};

export default ReportIssue;
