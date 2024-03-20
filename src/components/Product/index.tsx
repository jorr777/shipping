import { ProductHeader } from "../index";
import Image1 from "../../assets/productItemImage1.jpeg";
import Image2 from "../../assets/productItemImage2.png";
import Image3 from "../../assets/productitemImage3.png";
import Image4 from "../../assets/productItemImage4.png";
import "./ProductItem.css";
import { useState } from "react";
import BidInfo from "./BidInformation/BidInfo";
import CarInfoList from "./CarInfoList/CarInfoList";
import FlagGeorgia from "../Ui/Icons/FlagGeorgia";
import Files from "./Files/Files";

const headerInfo = [
  { infoType: "Lot", productInfo: "12345678" },
  { infoType: "Sale Location", productInfo: "Georgia" },
  { infoType: "Sale Date", productInfo: "Tomorrow/May 28/2020 - 04:00 AM" },
];

const ProductItem = () => {
  const [active, setActive] = useState<boolean>(false);

  const onChange = (event: boolean) => {
    setActive(event);
  };

  return (
    <div className="container">
      <ProductHeader
        info={headerInfo}
        onChange={onChange}
        productIsActive={active}
      />
      <div className="product_information">
        <div className="product_info_image">
          <div>
            <div className="product_info_main_img div__Image"></div>
            <div className="product_info_images">
              <img src={Image1} alt="productimage" />
              <img src={Image2} alt="productimage" />
              <img src={Image3} alt="productimage" />
              <div style={{ position: "relative" }}>
                <div className="product_image_fone">
                  <p>+7 photos</p>
                </div>
                <img
                  src={Image4}
                  alt="productimage"
                  width="100%"
                  height="100%"
                />
              </div>
              {active && <img src={Image2} alt="productimage" />}
            </div>
          </div>
        </div>
        <div className="car_lot_information">
          <div>
            <div className="info_types">
              <div className="title__Info__Field info_type active">
                Lot: #12345678
              </div>
              <div className="title__Info__Field info_type">
                More Information
              </div>
            </div>
            <CarInfoList headerInfo={headerInfo} active={active} />
          </div>
          <Files />
        </div>
        <div className="bid_Information">
          <BidInfo active={active} />
          <div className="sale_Information">
            <div className="title__Info__Field">Sale Inforamation</div>
            <div className="car_info_item shadow__Item">
              <p>Sale Inforamation</p>
              <p>
                <FlagGeorgia /> Georgia
              </p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Address:</p>
              <p>45, Kote Aphkhazi Str, 45 Kote Afkhazi St, Tbilisi 0105</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Mail:</p>
              <p>globalshipping@gmail.com</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Ph. Number:</p>
              <p>+995 350 223 334</p>
            </div>
            <div className="car_info_item shadow__Item">
              <p>Time Number:</p>
              <p className="time_number">0d 24h 1min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
