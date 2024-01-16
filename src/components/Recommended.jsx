import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import star from "../assets/icons/star.svg";
import "../sass/recommended.scss";
const Recommended = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      // const apiKey = "AIzaSyCwVnuZXE2-GI7bfNtWIzfwZFApI-gvUqc";
      // const apiKey2 = "AIzaSyAsATYfUvtkZ5EK4KQ7AXmsj9Mq60S3Z3s";
      const apiKey3 = "AIzaSyBPObuwqcjiiU0h3s7F5zaLySOZv4xY6Qo";
      const query = "all the light";

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
    <section className="recomended bg-[rgba(220,220,220,0.36)] w-full">
      <div className="">
        <div className="pt-[90px]">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="recommendedBooks bg-[#ffffffe4] pt-[42px] pl-[75px] shadow-xl">
              <h2 className="recomended__title pb-[60px] font-medium text-4xl leading-[47.4px] tracking-[0.2%] max-w-[290px] w-full text-black">
                Recommended
              </h2>
              <div className="recommendedBooks__card">
                {recommendedBooks.slice(0, 4).map((book, index) => (
                  <li key={index}>
                    <Link to={`/home/${book?.id}`}>
                      <div className="recomended__card flex items-center gap-x-[23px]">
                        {book.volumeInfo.imageLinks &&
                          book.volumeInfo.imageLinks.thumbnail && (
                            <img
                              className="recomended__card__img"
                              src={book.volumeInfo.imageLinks.thumbnail}
                              alt={`${book.volumeInfo.title}`}
                            />
                          )}
                        <span className="">
                          <h3 className="recomended__card__text max-w-[304px] w-full font-normal text-[25px] leading-[35px] text-black">
                            {book.volumeInfo.title}
                          </h3>
                          <p className="recomended__card__authors max-w-[134px] w-full text-[#00000085] font-normal text-[16px] leading-[19px] pt-[18px] pb-[18px]">
                            {book.volumeInfo.authors}
                          </p>
                          <img src={star} alt="star votes" />
                          <p className="recomended__card__lorem max-w-[305px] w-full text-[#00000059] font-normal text-[16px] leading-[25px] tracking-[0.3%] pt-[13px]">
                            {book.volumeInfo.description.slice(0, 80)}
                          </p>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
