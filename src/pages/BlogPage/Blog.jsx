import Navbar from "../../components/Navbar";
import Book from "../../assets/images/book.png";
import "../../sass/mixins.scss";
const Blog = () => {
  return (
    <>
      <Navbar
        title={"blog mybook"}
        text={
          "lightweight article where discussing matters relating to the book"
        }
        image={Book}
        style={{
          width: "538px",
          height: "358px",
          position: "absolute",
          top: "150px",
          right: "-80px",
        }}
      />
    </>
  );
};

export default Blog;
