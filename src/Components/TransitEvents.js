import React from 'react'
import { useSelector } from 'react-redux'
import SingleEvent from './SingleEvent';
import { useTranslation } from "react-i18next";

const TransitEvents = () => {
  const { t } = useTranslation();
  const transitEvents = useSelector((state)=>state.shipment.shipmentInfo.transitEvents)
  const status = useSelector((state) => state.shipment.status);

  return (
    <div className='w-full'>
      <h2 className='px-2 py-2'>{t('shipmentHistory')}</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-400">
          <tr>
            <th className="w-max-content py-2 px-4">{t('Status')}</th>
            <th className="w-max-content py-2 px-4">{t('Date')}</th>
            <th className="w-max-content py-2 px-4">{t('Time')}</th>
            <th className="w-max-content py-2 px-4">{t('Hub')}</th>
          </tr>
        </thead>
        <tbody>
          {status === "succeeded" && transitEvents.map((event,id)=>{
            return(
                <SingleEvent key={id} data={event} />
            )
          })}
        </tbody>
        </table>
    </div>
  )
}

export default TransitEvents
