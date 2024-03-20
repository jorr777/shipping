import React, { memo } from "react";
import { IProductHeaderInfo } from "../ProductHeader/ProductHeader";
import FlagGeorgia from "../../Ui/Icons/FlagGeorgia";

type IProp = {
  info: IProductHeaderInfo[];
};

const ProductHeaderLinks = ({ info }: IProp) => {
  return (
    <>
      {info.map((el) => (
        <div key={el.infoType}>
          <p>{el.infoType}:</p>
          <h6 className="product_header_Info_item">
            {el.infoType === "Sale Location" && <FlagGeorgia />}
            {el.productInfo}
          </h6>
        </div>
      ))}
    </>
  );
};

export default memo(ProductHeaderLinks);
