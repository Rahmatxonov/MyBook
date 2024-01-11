import logo from "../assets/icons/MYBOOK.svg";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="navbar__logo  flex items-center gap-4">
              <img src={logo} alt="logo" />
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
