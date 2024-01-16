import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Book from "../../assets/images/book.png";
import "../../sass/mixins.scss";
import "../../sass/blog.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      // const apiKey = "AIzaSyCwVnuZXE2-GI7bfNtWIzfwZFApI-gvUqc";
      // const apiKey2 = "AIzaSyAsATYfUvtkZ5EK4KQ7AXmsj9Mq60S3Z3s";
      const apiKey3 = "AIzaSyBPObuwqcjiiU0h3s7F5zaLySOZv4xY6Qo";
      const query = "reactjs";

      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&projection=full&key=${apiKey3}`;

      try {
        const response = await axios.get(url);
        const data = response.data.items || [];
        setRecommendedBooks(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

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
          right: "-40px",
        }}
      />
      <section className="bg-[rgba(220,220,220,0.36)] w-full m-auto">
        <div className="container">
          <div className="box pt-[73px] pb-[117px]">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <div className="block grid grid-cols-3 gap-[26px]">
                {recommendedBooks.slice(0, 9).map((book, index) => (
                  <div key={index} className="">
                    {book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail && (
                        <Link to={`/home/${book?.id}`}>
                          <div className="box bg-white max-w-[406px] w-full">
                            <img
                              className="max-w-[406px] w-full h-[344px] object-cover"
                              src={book.volumeInfo.imageLinks.thumbnail}
                              alt={`${book.volumeInfo.title}`}
                            />
                            <div className="block__card pt-[47px] pb-[47px] pl-[44px] pr-[44px]">
                              <h3 className="block__title pt-[47px] text-center max-w-[318px] w-full text-black text-[25px] font-medium leading-[30px] capitalize">
                                {book.volumeInfo.title}
                              </h3>
                              <p className="block__text max-w-[302px] w-full pt-[19px] text-black text-center text-[16px] font-normal leading-[30px] capitalize">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Purus morbi eleifend enim,
                                tristique
                              </p>
                            </div>
                          </div>
                        </Link>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
