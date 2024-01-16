import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../sass/populer.scss";

const Like = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      // const apiKey = "AIzaSyCwVnuZXE2-GI7bfNtWIzfwZFApI-gvUqc";
      const apiKey3 = "AIzaSyBPObuwqcjiiU0h3s7F5zaLySOZv4xY6Qo";
      const query = "Becomings";

      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&projection=full&key=${apiKey3}`;

      try {
        const response = await axios.get(url);
        const data = response.data.items || [];
        setRecommendedBooks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

  return (
    <Swiper
      className=" w-full bg-white pl-5 pr-5"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {recommendedBooks.map((book, index) => (
        <div className="slider max-w-[500px] p-5" key={index}>
          <h3 className="text-[40px]">Populer</h3>
          <SwiperSlide className="SwiperSlide pt-[100px] pb-20 pl-5 pr-5">
            <Link to={`/home/${book?.id}`}>
              <img
                className="recommended__card__img"
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            </Link>
            <p>{book.volumeInfo.title}</p>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Like;
