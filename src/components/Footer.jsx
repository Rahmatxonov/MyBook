import { NavLink, Link } from "react-router-dom";
import mybook from "../assets/icons/Footer-MYBOOK.svg";
import "../sass/mixins.scss";
import "../sass/footer.scss";
const Footer = () => {
  return (
    <footer className="bg-[#FF971D] sticky">
      <div className="footer flex items-center justify-between p-6 flex-wrap">
        <Link className="footer__logo pl-[45%]" to="/">
          <img src={mybook} alt="mybook" />
        </Link>
        <ul className="footer__ul flex items-center gap-x-[48px] text-white pr-[87px]">
          <li>
            <NavLink to="/explorer">Explorer</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blog">About</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
