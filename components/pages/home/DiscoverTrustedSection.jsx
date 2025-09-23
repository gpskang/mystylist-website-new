"use client";

import React from "react";
import Image from "next/image";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";

const DiscoverTrustedSection = () => {
  return (
    <section className="discover-trusted-section">
      <div className="container">
        <div className="discover-trusted-section-inner">
          <div className="row gx-5">
            {/* Left Column */}
            <div className="col-md-4 wow fadeInUp">
              <FadeUpContainer>
              <h3 className="mb-3">At My Stylist App</h3>
              <p className="mb-4">
                Directly select and visit trusted Stylits by filtering your
                choices in terms of experience, reviews, ratings and location.
                By narrowing down these factors, you can effortlessly book and
                schedule your appointment.
              </p>
              <p className="mb-4">
                Add to your cart the services you would like to avail from your
                selected Stylists. Checkout with your preferred mode of payment
                or you can even pay later. Apply your coupon code to enjoy
                exclusive deals and offers by visiting the Stylist on scheuled
                time.
              </p>
              <p className="mb-4">
                With one-to-one consultation, our professionals make sure to
                implement results that meet your requirements.
              </p>
              <p className="mb-0">
                Enjoy a cutting-edge experience using our app - My Stylist !
              </p>
              </FadeUpContainer>
            </div>

            {/* Right Column */}
            <div className="col-md-8">
              <div className="row gx-5">
                {/* Card 1 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-1.svg"
                          alt="Hair Magic"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Hair Magic</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Our expert hair stylists will breathe a new life in your
                      look with a cutting-edge hairstyle using an innovative
                      approach.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 2 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/assets/img/icon-2.svg"
                          alt="Make-up"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Make-up</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Be it for any occasion, our trusted stylists make sure you
                      leave the room feeling beautiful in our exquisite make-up.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 3 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-3.svg"
                          alt="Manicure & Pedicure"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Manicure & Pedicure</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Our stylists expertly shape, buff and polish your nails.
                      Your feet are also loosened and cared for with utmost
                      precision.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 4 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-4.svg"
                          alt="Skin care"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Skin care</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Radiate your natural glow with our deep-cleansing
                      techniques that will help to revitalize your skin and
                      unclog your pores.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 5 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-5.svg"
                          alt="Spa & Massages"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Spa & Massages</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Pamper yourself with personalized spa & massage treatments
                      using ancient healing techniques to unwind and relax.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 6 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-5.svg"
                          alt="Male Grooming"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Male Grooming</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      From getting a haircut to trimming your beard, our
                      stylists have mastered different techniques to redefine
                      your reflection.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>

                {/* Card 7 */}
                <div className="col-md-6 wow fadeInUp">
                  <FadeUpContainer>
                  <div className="discover-trusted-section-box">
                    <div className="d-flex align-items-center position-relative mb-3">
                      <figure className="flex-shrink-0 me-3 mb-0">
                        <Image
                          src="/img/icon-5.svg"
                          alt="Bridal"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <div>
                        <h6 className="m-0">Bridal</h6>
                      </div>
                    </div>
                    <p className="mb-4">
                      Our expert stylists ensure every detail is perfected to
                      translate your dream makeover into a reality on your
                      special day.
                    </p>
                  </div>
                  </FadeUpContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverTrustedSection;
