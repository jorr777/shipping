import "./TodaysAuction.css";
import FlagGeorgia from "../Ui/Icons/FlagGeorgia";

const TodaysAuction = () => {
  return (
    <div className="todays_auction">
      <div className="auction_sale_time">
        <p className="auction_item_title">
          Sale Time <span className="auctin-item_style">:</span>
        </p>
        <div className="auction_sale_time_info todays_auction_info">
          <time>11:00 PM</time>
          <p>LIVE NOW</p>
        </div>
      </div>
      <div className="auction_sale_name">
        <p className="auction_item_title">
          Sale Name <span className="auctin-item_style">:</span>
        </p>
        <div className="todays_auction_info">
          <p className="autction_sale_name_info">
            <FlagGeorgia />
            <span>Georgia</span>
          </p>
        </div>
      </div>
      <div className="auction_sale_items">
        <p className="auction_item_title">
          Items<span className="auctin-item_style">:</span>
        </p>
        <div className="todays_auction_info">
          <p>67</p>
        </div>
      </div>
      <div className="auction_sale_action">
        <p className="auction_item_title">
          Action <span>:</span>
        </p>
        <div className="auction_action_info todays_auction_info">
          <button>Join Auction</button>
          <p>View sale list</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysAuction;
