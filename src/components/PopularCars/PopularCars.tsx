import NextButton from "../Ui/Icons/NextButton";
import PrevButton from "../Ui/Icons/PrevButton";
import SoldOutIcon from "../../assets/soldCar.png";

import "./PopularCars.css";

interface IProp {
  type?: string;
}

const PopularCars = ({ type }: IProp) => {

  return (
    <div>
      <h3 className="h3Font">
        {type === "SoldOut" ? "Sold Out" : "SoldOut"}
      </h3>
      <div className="popular_cars">
        <div className="popular_cars_nextprevBtn">
          <PrevButton classname="prev" color="#094067" />
          <NextButton classname="next" color="#094067" />
        </div>
        <div className="popular_cars_list">
          <div className="popular_car_item">
            <div className="popular_car_item_image car_image1">
              {type === "SoldOut" ? (
                <div className="sold_car_info">
                  <div>25.000$</div>
                  <img src={SoldOutIcon} alt="" width={"60px"} />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="popular_car_item_info">
              <p>Bmw 3er...</p>
              <p>View Item</p>
            </div>
          </div>
          <div className="popular_car_item">
            <div className="popular_car_item_image car_image2">
              {type === "SoldOut" ? (
                <div className="sold_car_info">
                  <div>25.000$</div>
                  <img src={SoldOutIcon} alt="" width={"60px"} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="popular_car_item_info">
              <p>Mercedes Be...</p>
              <p>View Item</p>
            </div>
          </div>
          <div className="popular_car_item">
            <div className="popular_car_item_image car_image3">
              {type === "SoldOut" ? (
                <div className="sold_car_info">
                  <div>25.000$</div>
                  <img src={SoldOutIcon} alt="" width={"60px"} />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="popular_car_item_info ">
              <p>Toyota...</p>
              <p>View Item</p>
            </div>
          </div>
          <div className="popular_car_item">
            <div className="popular_car_item_image car_image4">
              {type === "SoldOut" ? (
                <div className="sold_car_info">
                  <div>25.000$</div>
                  <img src={SoldOutIcon} alt="" width={"60px"} />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="popular_car_item_info">
              <p>BMW 2er...</p>
              <p>View Item</p>
            </div>
          </div>
          <div className="popular_car_item">
            <div className="popular_car_item_image car_image5">
              {type === "SoldOut" ? (
                <div className="sold_car_info">
                  <div>25.000$</div>
                  <img src={SoldOutIcon} alt="" width={"60px"} />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="popular_car_item_info">
              <p>BMW 2er...</p>
              <p>View Item</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCars;
