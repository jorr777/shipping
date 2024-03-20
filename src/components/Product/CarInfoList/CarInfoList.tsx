import React, { useState } from "react";
import FlagGeorgia from "../../Ui/Icons/FlagGeorgia";

const CarInfoList = ({ active, headerInfo ,...props }: any) => {
  const [viewMore, setViewMore] = useState<boolean>(false);

  const handleView = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="car_info_list">
      {active &&
        headerInfo.map((el: any) => {
          return (
            <div key={el.infoType} className="car_info_item shadow__Item">
              <p>{el.infoType}:</p>
              <p>
                {el.infoType === "Sale Date" ? (
                  "May 28/2020 - 04:00 AM"
                ) : el.infoType === "Sale Location" ? (
                  <>
                    <FlagGeorgia />
                    {el.productInfo}
                  </>
                ) : (
                  el.productInfo
                )}
              </p>
            </div>
          );
        })}
      <div className="car_info_item shadow__Item">
        <p>Vin:</p>
        <p>1GNCS18Z3M0115561</p>
      </div>
      <div className="car_info_item shadow__Item">
        <p>Odometer:</p>
        <p>104.164 - Actual</p>
      </div>
      {!(viewMore && active) && (
        <>
          <div className="car_info_item shadow__Item">
            <p>Highlights:</p>
            <p>Run and Drive</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Color:</p>
            <p>Silver</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Engine Type:</p>
            <p>1.6 L 4</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Cylinders:</p>
            <p>4</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Drive:</p>
            <p>Front - wheel Drive</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Fuel:</p>
            <p>Gas</p>
          </div>
          <div className="car_info_item shadow__Item">
            <p>Keys:</p>
            <p>Yes</p>
          </div>
          {props.children}
        </>
      )}
      <div onClick={handleView} className="view_more shadow__Item">
        {viewMore ? "View More" : "View Less"}
      </div>
    </div>
  );
};

export default CarInfoList;
