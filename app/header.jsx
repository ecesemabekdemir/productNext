import Basket from "@/assets/images/basket.png";
import UserIm from "@/assets/images/userImage.png";

export default function Header() {
  return (
    <div className="header">
      <h1>sneakers</h1>
      <div className="basketCard">
        <button className="basketBtn">
          <img src={Basket.src} alt="" />
        </button>
        <div className="userImg"><img src={UserIm.src} alt="" /></div>
      </div>
    </div>
  );
}
