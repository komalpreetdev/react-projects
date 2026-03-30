import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import sliderData from "../data.js/sliderData.js";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function MainCarousel({ data, delay = 8000, variant = "mainBanner", slidesPerView = 1, spaceBetween = 0 }) {

  const [checkCategory,setCheckCategory] = useState();

  
  const navigate = useNavigate();

  const categoryHandler=(category)=>{
    
    navigate(`/category/${category}`);
    
  }

  return (

    <Swiper

      className="topSwiper"
      modules={[Autoplay]}
      loop={true}
      centeredSlides={true}
      autoplay={delay ? {
        delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}

    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} >

            {variant === "mainBanner" &&
              <div className="sliderBox" style={{ backgroundColor: item.bg }}>
                <div className="grid grid-cols-2">

                  {/* TEXT SECTION */}
                  <div className="descBox pt-20 pl-5 slide-text ">
                    <div className="text-6xl font-bold text-black slideTitle">
                      {item.title}
                    </div>

                    <p className="pt-4 slideDesc">{item.description}</p>

                    <button className="mt-4 default-bg p-2 text-white rounded-lg slideBtn">
                      {item.button}
                    </button>
                  </div>

                  {/* IMAGE SECTION */}
                  <div className="sliderShoe">
                    <img
                      src={item.img}
                      className="w-full pt-10 ml-20 flip-img"
                      alt="slider"
                    />
                  </div>

                </div>
              </div>
            }

            {

              
            
            variant === "product-category" &&

              <div className="category-box cursor-pointer text-center pt-10 rounded-full" onClick={()=>categoryHandler(item.categoryName)} style={{ backgroundColor: item.bg }}>
                <img src={item.img} />
                <p className="pb-4 text-lg font-semibold">{item.categoryName}</p>
              </div>


            }
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MainCarousel;