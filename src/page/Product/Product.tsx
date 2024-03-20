import AddtoWatchlist from "../../components/AddtoWatchlist/AddtoWatchList";
import {ProductItem , BreadcrumbNavigation} from '../../components/index';

import "./Product.css";

const Product = () => {
  return (
    <div>
        <BreadcrumbNavigation />
        <AddtoWatchlist />
        <ProductItem />
    </div>
  );
};

export default Product;
