import { Route, Routes } from "react-router-dom";
import { Home, Error, Product , AuctionGame} from "../page/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product_bid" element={<AuctionGame />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
