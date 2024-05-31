import React from "react";
import { format, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";

const SingleEvent = ({ data }) => {
  const { t } = useTranslation();
  const formatDate = (timestamp) => {
    const date = parseISO(timestamp);
    return format(date, "d/M/yyyy");
  };
  const formatTime = (timestamp) => {
    const date = parseISO(timestamp);
    return format(date, "h:mma");
  };

  return(
  <tr>
    <td className="py-2 px-4 text-center w-max-content">{t(data.state)}</td>
    <td className="py-2 px-4 text-center">
      {formatDate(data.timestamp)}
    </td>
    <td className="py-2 px-4 text-center">{formatTime(data.timestamp)}</td>
    <td className="py-2 px-4 text-center">{data.hub? data.hub : '-'}</td>
  </tr>)
};

export default SingleEvent;
