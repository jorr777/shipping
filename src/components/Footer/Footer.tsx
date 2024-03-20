import "./Footer.css";
import { LinkedInIcon , FacebookIcon , InstagramIcon } from "../Ui/Icons";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");

  return (
    <footer className={path[path.length - 1]}>
      <div className="footer_icons">
        <div>
          <FacebookIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <LinkedInIcon />
        </div>
      </div>
      <p>Terms and Conditions</p>
      <div className="footer_info">
        <p>©Global Shipping Powered by ShellLogix</p>
      </div>
    </footer>
  );
};

export default Footer;
