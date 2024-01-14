import Navbar from "../../components/Navbar";
import HeaderBg from "../../assets/images/headerbg.png";
import Sidebar from "../../components/Sidebar";
const Home = () => {
  return (
    <>
      <Navbar
        title={"read and add your insight"}
        text={"find your favorite book and read it here for free"}
        image={HeaderBg}
        style={{
          width: "297px",
          height: "497px",
          position: "absolute",
          top: "115px",
          right: "-30px",
        }}
      />
      <Sidebar
        genres={[
          "All Genres",
          "Business",
          "Science",
          "Fiction",
          "Philosophy",
          "Biography",
        ]}
        recommendations={[
          "Artist of the Month",
          "Book of the Year",
          "Top Genre",
          "Trending",
        ]}
      />{" "}
    </>
  );
};

export default Home;
