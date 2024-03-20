import { useState } from "react";
import MyButton from "../../Ui/customUi/MyButton/MyButton";
import classNames from "classnames";
import {
    Image1,
  upcomingCars2,
  upcomingCars3,
  upcomingCars4,
} from "../../../assets/index";

const UpcommingLotsList = () => {
  const [active, setActive] = useState<boolean>(false);

  const activeHandler = () => {
    setActive(!active);
  };

  const upcomming_lotsList_Class = classNames({
    upcomming_lots_list: true,
    active,
  });

  return (
    <div className="upcomming_lots">
      <p className="upcomming_lots_title shadow__Item" onClick={activeHandler}>Upcomming Lots</p>
      <div className={upcomming_lotsList_Class}>
        <div className="upcomming_lots_item shadow__Item">
          <div
            style={{
              background: `url(${Image1})`,
            }}
            className="upcomming_item_image"
          >
            <MyButton className="upcomming_item_btn ">Next</MyButton>
          </div>

          <div className="upcomming_lots_item_info ">
            <p className="upcomming_lots_item_title">2014 - BMW 3er Touring</p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className="upcomming_lots_item shadow__Item">
          <div
            style={{
              background: `url(${upcomingCars2})`,
            }}
            className="upcomming_item_image"
          >
            <MyButton className="upcomming_item_btn ">Next</MyButton>
          </div>

          <div className="upcomming_lots_item_info ">
            <p className="upcomming_lots_item_title">
              2013 - Mercedes Benz GLC
            </p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className="upcomming_lots_item shadow__Item">
          <div
            style={{
              background: `url(${upcomingCars3})`,
            }}
            className="upcomming_item_image"
          >
            <MyButton className="upcomming_item_btn ">Next</MyButton>
          </div>

          <div className="upcomming_lots_item_info ">
            <p className="upcomming_lots_item_title">2019 - Toyota Corolla</p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
        <div className="upcomming_lots_item shadow__Item">
          <div
            style={{
              background: `url(${upcomingCars4})`,
            }}
            className="upcomming_item_image"
          >
            <MyButton className="upcomming_item_btn ">Next</MyButton>
          </div>
          <div className="upcomming_lots_item_info ">
            <p className="upcomming_lots_item_title">2019 - BMW 1er Lim</p>
            <p>Lot: 12345678</p>
            <p>Location: Georgia</p>
            <p>Current Bid: $3.400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingLotsList;
