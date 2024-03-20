import Star from "../Ui/Icons/Star";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import "./AddtoWatchlist.css";

const AddtoWatchlist = () => {
  return (
    <div className="watchlist container">
      <MyButton className={"watchlist_button"}>
        <Star /> Add to Watchlist
      </MyButton>{" "}
    </div>
  );
};

export default AddtoWatchlist;
