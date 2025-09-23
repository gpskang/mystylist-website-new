"use client";

import React from "react";
import Image from "next/image";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";
const HomeBanner = () => {
  return (
    <section className="home-banner">
      <FadeUpContainer>
      <div className="container h-100">
        <div className="home-banner-inner h-100">
          <div className="row align-items-center h-100">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="home-banner-left text-start">
                <h1 className="mainText">
                  Welcome to the World of Beauty and Wellness
                </h1>
                <p>
                  Discover, Schedule Appointment and Pay a visit to top-rated
                  trusted Stylists
                </p>
                <div className="store-btns">
                  {/* App Store */}
                  <a
                    href="https://apps.apple.com/in/app/mystylist-book-a-stylist/id6475633914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <Image
                      src="/img/apple-store.svg"
                      alt="Download MyStylist on App Store"
                      title="Download MyStylist on App Store"
                      width={180}
                      height={55}
                      priority
                    />
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mystylist.user&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wow fadeInUp"
                    data-wow-duration="1.5s"
                  >
                    <Image
                      src="/img/google-store.svg"
                      alt="Download MyStylist on Google Play"
                      title="Download MyStylist on Google Play"
                      width={180}
                      height={55}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <div
                className="home-banner-right text-end wow fadeInUp"
                data-wow-duration="2s"
              >
                <Image
                  src="/img/banner-img.png"
                  alt="MyStylist Banner"
                  title="MyStylist Banner"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeUpContainer>
    </section>
  );
};

export default HomeBanner;
