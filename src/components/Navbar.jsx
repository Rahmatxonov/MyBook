import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/MYBOOK.svg";
import vector from "../assets/icons/Vector.svg";
import "../sass/navbar.scss";
import "../sass/fonts.scss";

const Navbar = ({ title, text, image, style }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative">
      <nav className="absolute top-0 left-0 w-full">
        <div className="container">
          <div className="navbar pt-11 flex items-center justify-between">
            <div className="navbar__logo  flex items-center gap-x-5">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <img src={vector} alt="vector" />
              <FiShoppingCart />
            </div>
            <ul
              className={`navbar__ul flex items-center gap-x-11 ${
                isMenuOpen ? "hidden" : ""
              }`}
            >
              <li>
                <NavLink
                  className="navbar__ul__link text-white font-medium text-base leading-[19px]"
                  to="/explorer"
                  onClick={closeMenu}
                >
                  Explorer
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar__ul__link text-white font-medium text-base leading-[19px]"
                  to="/shop"
                  onClick={closeMenu}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar__ul__link text-white font-medium text-base leading-[19px]"
                  to="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <Link
                  className="navbar__ul__btn py-[14px] pr-[58px] pl-[58px] bg-[#ffffff] font-normal text-[25px] leading-[20.63px] text-black mt-5"
                  to="/login"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
              </li>
            </ul>
            <div
              className={`navbar__tablet ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {isMenuOpen ? (
                <IoClose onClick={toggleMenu} className="close-icon" />
              ) : (
                <RiMenu3Line onClick={toggleMenu} className="hamburger-icon" />
              )}
              {isMenuOpen && (
                <ul className="navbar__tablet__ul">
                  <li>
                    <NavLink
                      to="/explorer"
                      className="navbar__tablet__link"
                      onClick={closeMenu}
                    >
                      Explorers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop"
                      className="navbar__tablet__link"
                      onClick={closeMenu}
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className="navbar__tablet__link"
                      onClick={closeMenu}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="navbar__tablet__btn py-2 pr-8 pl-8 bg-[#ffffff] font-normal text-[16px] leading-[20.63px] text-black mt-5 "
                      onClick={closeMenu}
                    >
                      Log in
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="hero flex flex-col justify-center h-full pt-[100px]">
          <h1 className="hero__title text-[75px] max-w-[774px] w-full uppercase font-bold leading-[95px] decoration-black">
            {title}
          </h1>
          <p className="hero__text text-[25px] max-w-[555px] w-full capitalize font-normal leading-[40px] pt-[15px] decoration-black">
            {text}
          </p>
          <div className="search flex items-center mt-[25px] gap-x-[8px] bg-[#F5F6F8] max-w-[406px] w-full pt-[18px] pb-[18px] pl-[15px]">
            <IoSearchOutline className="search__icon text-xl" />
            <input
              className="outline-none bg-transparent"
              type="text"
              placeholder="Search Book"
            />
          </div>
          <img className="hero__girl" src={image} alt="header" style={style} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
