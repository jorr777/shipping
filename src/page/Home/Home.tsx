import PopularCars from "../../components/PopularCars/PopularCars";
import SoldOutCars from "../../components/SoldOutCars/SoldOutCars";
import "./Home.css";
import HomePageSlider from "../../components/HomePageSlider/HomePageSlider";
import TodaysAuction from "../../components/TodaysAuction/TodaysAuction";

const Home = () => {
  return (
    <div>
      <HomePageSlider />
      <div className="container">
        <h3 className="h3Font">Today's Auctions</h3>
        <TodaysAuction />
        <PopularCars />
        <SoldOutCars />
      </div>
    </div>
  );
};

export default Home;
