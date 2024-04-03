import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css"; // Import Swiper core styles
import "swiper/css/effect-creative"; // Import Swiper creative effect styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "../../responsive.css";
import "../../styles.css";
import Image from "next/image";

const Award = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "start",
    dragFree: true,
  });

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    setInterval(() => {
      scrollNext();
    }, 3000);
  }, [embla, scrollNext]);

  const [brandImages, setbrandImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/award/`
        );
        const data = await res.json();
        setbrandImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <section id="award" className="bg-white w-100 py-4">
      <div className="container">
        <div className="row">
          <div className=" px-4 px-lg-0">
            <Swiper
              effect={"creative"}
              slidesPerView={4}
              speed={500}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {brandImages.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <Image
                      width={100}
                      height={100}
                      loading="lazy"
                      src={data.heroImage}
                      style={{ width: "150px", height: "auto" }}
                      alt="award-coffure"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
