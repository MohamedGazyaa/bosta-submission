import React from "react";
import CurrentStatus from "../Components/CurrentStatus";
import ProgressBar from "../Components/ProgressBar";
import TransitEvents from "../Components/TransitEvents";
import ShippingAddress from "../Components/ShippingAddress";
import ReportIssue from "../Components/ReportIssue";
import { useDispatch} from "react-redux";
import { fetchShipment } from "../Redux/shipmentSlice";

const TrackShipmentPage = () => {


  const dispatch = useDispatch();
  dispatch(fetchShipment(40106705));

  return (
    <div className=" m-8 h-lvh flex flex-col">
      <div className="flex flex-col border rounded-md">
        <CurrentStatus />
        <ProgressBar />
      </div>
      <div className="flex justify-center gap-32 mt-4 w-full">
        <TransitEvents />
        <div className="ml-6 w-full">
          <ShippingAddress />
          <ReportIssue />
        </div>
      </div>
    </div>
  );
};

export default TrackShipmentPage;
