import { useEffect, useRef, useState } from "react";
import "./ProductHeader.css";
import MoreIcon from "../../Ui/Icons/MoreIcon";
import ProductHeaderLinks from "../ProductHeaderLinks/ProductHeaderLinks";
import classNames from "classnames";

export type IProductHeaderInfo = {
  infoType: string;
  productInfo: string;
};

interface IProductHeader {
  info: IProductHeaderInfo[];
  onChange: (e: boolean) => void;
  productIsActive: boolean;
}

const ProductHeader = ({ info, onChange, productIsActive }: IProductHeader) => {
  const [active, setActive] = useState<boolean>(false);

  const ref = useRef<any>();

  const viewMore = () => {
    setActive(!active);
  };

  useEffect(() => {
    const updateSize = () => {
      if (!(window.innerWidth > 769) && !productIsActive) {
        onChange(true);
      } else if (!(window.innerWidth <= 769) && productIsActive) {
        onChange(false);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [productIsActive, onChange]);

  const headerClass = classNames({
    product_header_Info: true,
    active,
  });

  return (
    <div className="product_header">
      <div className="product_header_main">
        <h3 className="product_title">2014 - BMW 3er Touring</h3>
        <MoreIcon onClick={viewMore} />
      </div>
      <div
        className={headerClass}
        ref={ref}
      >
        {!productIsActive && <ProductHeaderLinks info={info} />}
      </div>
    </div>
  );
};

export default ProductHeader;
