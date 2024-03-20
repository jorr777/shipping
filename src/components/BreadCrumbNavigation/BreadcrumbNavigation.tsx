import LeftSvg from "../Ui/Icons/LeftSvg";
import RightSvg from "../Ui/Icons/RightSvg";
import MyButton from "../Ui/customUi/MyButton/MyButton";
import "./Breadcrumbnavigation.css";

const BreadcrumbNavigation = () => {
  return (
    <div className="breadcrumb_navigation container">
      <div>
        <div className="breadcrumb_navigation_list">
          <MyButton className="breadcrumb_navigation_item">Home</MyButton>
          <MyButton className="breadcrumb_navigation_item">
            Auction Calendar
          </MyButton>
          <MyButton className="breadcrumb_navigation_item">
            Sale List for Georgia
          </MyButton>
          <MyButton className="breadcrumb_navigation_item">
            2014 - BMW 3er Touring
          </MyButton>
        </div>
        <div className="navigatinoBtns">
          <MyButton className={"navigationPrev"} disabled>
            <RightSvg /> Previous
          </MyButton>
          <MyButton className={"navigation"}>
            Next <LeftSvg />
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
