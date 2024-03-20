import MyInput from "../../Ui/customUi/MyInput/MyInput";
import MyButton from "../../Ui/customUi/MyButton/MyButton";

const BidInfo = ({ active }: any) => {
  return (
    <div className="bid_Information_List">
      {!active && (
        <>
          <div className="title__Info__Field bid_Information_title">
            Bid information
          </div>

          <div className="car_info_item shadow__Item">
            <p>Bid Status:</p>
          </div>
          <div className="car_info_item shadow__Item">Minimum Bid:</div>
        </>
      )}
      <div className={"shadow__Item car_info_item Bid_form"}>
        <div className="bid__current_bid">
          <p>Current Bid:</p>
          <p>$0</p>
        </div>
        {!active && (
          <>
            <p>Your Max Bid:</p>
            <div className="bid__buy_item">
              <span>$</span>
              <MyInput placeholder="400" />
            </div>
            <MyButton className={"bid_button btn1"}>Bid Now</MyButton>
            <p className="bid_price" style={{ textAlign: "center" }}>
              $3.400
            </p>
          </>
        )}
        <MyButton className={"bid_button buy_button"}>Buy It Now</MyButton>
      </div>
    </div>
  );
};

export default BidInfo;
