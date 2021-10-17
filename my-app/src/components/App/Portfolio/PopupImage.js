import "./Popup.scss";
import ad1 from "../../../assets/ad1.png";
import ad2 from "../../../assets/pick.png";
import ad3 from "../../../assets/pick3.png";
import ad4 from "../../../assets/pick4.png";
import ScrollableAnchor from "react-scrollable-anchor";
import footerMan from "../../../assets/footerMan.png";

const PopupImage = (imgProps, open) => {
  return (
    <div className={open ? "popup-open" : "popup-closed"}>
      <div className="PopupContainer">
        <img src={imgProps} alt="img fullscreen" />
      </div>
    </div>
  );
};

export default PopupImage;
