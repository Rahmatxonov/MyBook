import Navbar from "../components/Navbar";
import HeaderBg from "../assets/images/headerbg.png";
const Layout = () => {
  return (
    <Navbar
      hero__title={"read and add your insight"}
      text={"find your favorite book and read it here for free"}
      image={HeaderBg}
    />
  );
};

export default Layout;
