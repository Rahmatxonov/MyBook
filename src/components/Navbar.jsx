import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/icons/MYBOOK.svg";
import vector from "../assets/icons/Vector.svg";
import "../sass/navbar.scss";
import "../sass/fonts.scss";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar pt-11 flex items-center justify-between">
            <div className="navbar__logo  flex items-center gap-x-5">
              <img src={logo} alt="logo" />
              <img src={vector} alt="vector" />
              <FiShoppingCart />
            </div>
            <ul className="navbar__ul flex items-center gap-x-11">
              <li>
                <Link to="/explorer">Explorer</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <button className="navbar__ul__btn py-3.5 pr-14 pl-14 bg-[#ffffff]">
                Log in
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="hero flex flex-col justify-center h-full pt-[169px]">
          <h1 className="hero__title text-[75px] max-w-[574px] w-full uppercase font-bold leading-[95px] decoration-black">
            read and add your insight
          </h1>
          <p className="hero__text text-[25px] max-w-[555px] w-full capitalize font-normal leading-[25px] pt-[15px] decoration-black">
            find your favorite book and read it here for free
          </p>
          <div className="search flex items-center mt-[25px] gap-x-[8px] bg-[#F5F6F8] w-[406px] pt-[18px] pb-[18px] pl-[15px]">
            <IoSearchOutline className="search__icon text-xl" />
            <input
              className="outline-none bg-transparent"
              type="text"
              placeholder="Search Book"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
