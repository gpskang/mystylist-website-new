"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";

const ShowcaseSection = () => {
  const showcaseImages = [
    "/img/showcase1.svg",
    "/img/showcase2.svg",
    "/img/showcase3.svg",
    "/img/showcase4.svg",
    "/img/showcase5.svg",
    "/img/showcase6.svg",
    "/img/showcase7.svg",
    "/img/showcase8.svg",
  ];

  return (
    <section className="showcase-section">
      <div className="container">
        <div className="showcase-section-inner">
          <FadeUpContainer>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h6 className="mb-0 text-center">It is better to try yourself</h6>
              <h2 className="mb-2 text-center">My Stylist App Showcase</h2>
              <p className="mb-5 text-center">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          </FadeUpContainer>
        </div>
      </div>

      {/* Swiper Showcase Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="showcase-slider wow fadeInUp"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {showcaseImages.map((src, index) => (
          <SwiperSlide key={index}>
            <FadeUpContainer>
            <Image
              src={src}
              alt={`Showcase ${index + 1}`}
              width={300}
              height={600}
              className="mx-auto"
            />
            </FadeUpContainer>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-5">
        <FadeUpContainer>
        <a href="#download-apps" className="btn-green">
          Download Now
        </a>
        </FadeUpContainer>
      </div>
    </section>
  );
};

export default ShowcaseSection;
