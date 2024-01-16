import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import starBlack from "../../assets/icons/start.svg";
import "../../sass/detail.scss";
import DetailRight from "../../components/DetailRight";

const Checkout = () => {
  const { id } = useParams();
  const [recommendedBooks, setRecommendedBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
      try {
        const response = await axios.get(url);
        const data = response.data || {};
        setRecommendedBooks(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <>
      <div className="detail">
        <div className="container">
          <Link to="/">
            <IoMdArrowBack className="back w-[60px] h-[60px] text-white" />
          </Link>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="flex">
              <div className="max-w-[629px] w-full bg-white mt-[56px] shadow-xl">
                <span className="flex items-center gap-x-[36px]">
                  <img
                    className="detail__img w-[287px] h-[435px]"
                    src={recommendedBooks.volumeInfo.imageLinks.thumbnail}
                    alt={recommendedBooks.volumeInfo.title}
                  />

                  <span>
                    <span className="flex items-center gap-x-[35px]">
                      <h2 className="detail__title max-w-[200px] w-full text-[27px] font-medium leading-[38px]">
                        {recommendedBooks.volumeInfo.title}
                      </h2>
                      <FaRegSquarePlus className="text-[28px]" />
                    </span>

                    <span className="flex items-center gap-x-[10px] pt-[25px]">
                      <p className="detail__text font-normal text-[16px] leading-[19px] text-[#938f8f]">
                        {recommendedBooks.volumeInfo.publisher}
                      </p>
                      <p className="detail__text2 font-normal text-[14px] leading-[19px] text-[#938f8f]">
                        {recommendedBooks.volumeInfo.publishedDate}
                      </p>
                    </span>
                    <img
                      className="pt-[16px]"
                      src={starBlack}
                      alt="blackstar"
                    />
                    <span className="flex items-center gap-x-[25px] pt-[25px]">
                      <p className="detail__text2 font-normal text-[16px] leading-[19px] text-[#938f8f]">
                        {recommendedBooks.volumeInfo.dimensions.height}
                      </p>
                      <p className="detail__text2 font-normal text-[16px] leading-[19px] text-[#938f8f]">
                        {recommendedBooks.volumeInfo.dimensions.thickness}
                      </p>
                    </span>
                    <span className="flex items-center gap-5 mt-[44px]">
                      <button className="bg-[#FF971D] pt-[12px] pb-[12px] pl-[30px] pr-[30px] text-white rounded-[10px] capitalize">
                        Buy now
                      </button>
                      <button className="detail__btn pt-[10px] pb-[10px] pl-[30px] pr-[30px] border-[#FF971D] rounded-[10px] text-[#ff971d] capitalize">
                        read book
                      </button>
                    </span>
                  </span>
                </span>
                <div className="p-10">
                  <p className="detail__authors max-w-[400px] w-full text-[25px] font-normal leading-[23px] pb-[25px]">
                    {recommendedBooks.volumeInfo.authors}
                  </p>
                  <p className="detail__description max-w-[654px] w-full">
                    {recommendedBooks.volumeInfo.description}
                  </p>
                  <span className="flex items-center gap-x-[25px] pt-[54px]">
                    <button className="bg-[#DEDEDE] text-[#8888887b] pt-[8px] pl-[25px] pb-[8px] pr-[25px] rounded-[10px]">
                      Biografi
                    </button>
                    <button className="bg-[#DEDEDE] text-[#8888887b] pt-[8px] pl-[25px] pb-[8px] pr-[25px] rounded-[10px]">
                      AutoBiografi
                    </button>
                    <button className="bg-[#DEDEDE] text-[#8888887b] pt-[8px] pl-[25px] pb-[8px] pr-[25px] rounded-[10px]">
                      Memoar
                    </button>
                  </span>
                  <h3 className="detail__viewability pt-[54px] font-medium text-[25px] leading-[23px]">
                    {" "}
                    {recommendedBooks.accessInfo.viewability}
                  </h3>
                  <div className="flex items-center gap-x-4">
                    <span>
                      <h5 className="detail__countr text-[16px] font-normal pt-[20px]">
                        {" "}
                        {recommendedBooks.accessInfo.accessViewStatus}
                      </h5>
                      <p className="detail__kind text-[12px] font-normal pt-3">
                        {" "}
                        {recommendedBooks.accessInfo.viewability}
                      </p>
                    </span>
                    <span>
                      <h5 className="detail__countr text-[16px] font-normal pt-[20px]">
                        {" "}
                        {recommendedBooks.accessInfo.textToSpeechPermission}
                      </h5>
                      <p className="detail__kind text-[12px] font-normal pt-3">
                        {" "}
                        {recommendedBooks.saleInfo.country}
                      </p>
                    </span>
                    <span>
                      <h5 className="detail__countr text-[16px] font-normal pt-[20px]">
                        {" "}
                        {recommendedBooks.kind}
                      </h5>
                      <p className="detail__kind text-[12px] font-normal pt-3">
                        {" "}
                        {recommendedBooks.volumeInfo.printType}
                      </p>
                    </span>
                  </div>
                  <button className="detail__comBtn pt-[13px] pb-[13px] pl-[173px] pr-[173px] border-[#FF971D] rounded-[10px] text-[#ff971d] capitalize mt-[74px]">
                    See comment
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-wrap">
                <DetailRight />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
