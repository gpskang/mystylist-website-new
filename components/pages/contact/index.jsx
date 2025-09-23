"use client";

import Image from "next/image";
import React from "react";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";
const ContactPage = () => {
  return (
    <>
      {/* Banner Section */}
      <FadeUpContainer>
      <section
        className="innerpage-banner"
        style={{ backgroundImage: "url('/assets/img/contact-page-banner.jpg')" }}
      >
        <div className="container h-100">
          <div className="innerpage-banner-inner h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-7">
                <div className="home-banner-left text-start">
                  <h1>Contact</h1>
                  <p>No matter where you're going, by bus or carpool, prices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          className="map-iframe wow fadeInUp"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86931267123!2d76.72211!3d30.67995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1694088369258!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-section-inner">
            <div className="row gx-md-5">
              {/* Contact Form */}
              <div className="col-md-6 wow fadeInUp">
                <div className="contact-form form-area">
                  <h3 className="mb-3">Send us an email</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" placeholder="Your Email" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Business Name</label>
                        <input type="text" className="form-control" placeholder="Business Name" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <label className="form-label">Your Message</label>
                        <textarea className="form-control" placeholder="Your Message"></textarea>
                      </div>
                      <div className="col-md-6">
                        <button type="submit" className="btn-green">
                          ASK A QUESTION
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-md-6 wow fadeInUp">
                <h3 className="mb-3">Contact us</h3>
                <div className="row">
                  {[
                    { icon: "fa-phone", label: "Phone", value: "7070656562" },
                    { icon: "fa-envelope", label: "Email", value: "info@mystylist.in" },
                    { icon: "fa-headset", label: "Support", value: "24*7" },
                    {
                      icon: "fa-location-dot",
                      label: "Address",
                      value:
                        "MyStylist App, RoSe Technologies, SpaceJam Co Working, Plot No 1273, 3rd Floor, Sector 82, Mohali 160055",
                    },
                  ].map((item, index) => (
                    <div className="col-sm-6 mb-3" key={index}>
                      <div className="icon-box d-flex position-relative align-items-center">
                        <div className="icon-box-icon flex-shrink-0 me-2">
                          <i className={`fa-solid ${item.icon}`}></i>
                        </div>
                        <div className="icon-box-text">
                          <strong>{item.label}:</strong> {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-section-inner">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="store-btns text-center flex gap-4 justify-center">
                  <a href="#" className="wow fadeInUp" data-wow-duration="1s" rel="noopener noreferrer">
                    <Image src="/assets/img/apple-store.svg" alt="App Store" width={160} height={48} />
                  </a>
                  <a
                    href="#"
                    className="wow fadeInUp"
                    data-wow-duration="1.5s"
                    rel="noopener noreferrer"
                  >
                    <Image src="/assets/img/google-store.svg" alt="Google Play" width={160} height={48} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeUpContainer>
    </>
  );
};

export default ContactPage;
