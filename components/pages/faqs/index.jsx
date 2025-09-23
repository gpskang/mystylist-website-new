"use client";

import Image from "next/image";
import React from "react";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";
const FaqPage = () => {
  return (  
    <>
      {/* Banner Section */}
      
      <section
        className="innerpage-banner"
        style={{ backgroundImage: "url('/img/contact-page-banner.jpg')" }}
      >
        <div className="container h-100">
          <div className="innerpage-banner-inner h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-7">
                <div className="home-banner-left text-start">
                  <h1>FAQ&apos;S</h1>
                  <p>
                    Write us an e-mail via the form, or just send us an e-mail
                    directly at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-section-inner">
            <div className="wow fadeInUp">
              <h3 className="mb-3">My Stylist FAQ&apos;S</h3>
              <hr className="mb-4" />
            </div>

            <div className="row gx-md-5">
              {[
                {
                  q: "How can I sign-up as a customer?",
                  a: "You can download our app on android or iOS. Kindly enter your mobile number and verify it with OTP (one-time password). Post this process, you would have successfully signed in the portal.",
                },
                {
                  q: "How to book a stylist appointment online?",
                  a: "You can browse through different salon services offered by different stylists and pick your choice. Select the schedule. Complete the transaction online and confirm your booking.",
                },
                {
                  q: "How qualified are your expert stylists?",
                  a: "Our team of experts hold a vast experience in delivering best-quality services using innovative methods and premium products. They are top-rated stylists trusted by customers.",
                },
                {
                  q: "Are there any grooming services available for men?",
                  a: "Yes. My Stylist also caters to men offering a vast range of grooming services like hair cut, beard trimming, manicure, pedicure, coloring hair, eyebrow waxing and skin care to give them a refined appearance.",
                },
                {
                  q: "Does your stylist maintain hygiene and take safety precautions?",
                  a: "Our pool of professionals ensures that your safety is not compromised at any cost. They use their tools with utmost precision. We prioritize hygiene at all levels to offer you the best ambience where you can relax care-free.",
                },
                {
                  q: "Where can I contact customer care?",
                  a: "Your query is important to us. Write at info@mystylist.in for further communication. We are available to help you resolve your issue at the earliest.",
                },
                {
                  q: "Where can I reschedule my booking with a stylist?",
                  a: "You can head to the bookings section and choose your available time and date in order to reschedule the appointment.",
                },
                {
                  q: "How can I cancel my booking with a stylist?",
                  a: "You will have to enter the bookings section and click on the cancel option. Mention the reason and you can confirm the cancellation.",
                },
                {
                  q: "What would happen if the duration of my deal expires and I haven't availed the service?",
                  a: "You are allowed to cancel the deal and request for refund in such a situation.",
                },
                {
                  q: "What is the processing time of refund?",
                  a: "You will receive your refund in 2-3 days. We will return the credited amount to your account.",
                },
                {
                  q: "What are the payment methods available?",
                  a: "You can bill the amount through online payment methods like Paytm and Gpay, or via credit/debit card transaction. We also accept cash.",
                },
                {
                  q: "Do your professionals use branded products?",
                  a: "We use the best quality products available in the market that do not cause harm to your skin but instantly elevate it with a fresh appeal.",
                },
                {
                  q: "What are the benefits of using My Stylist app?",
                  a: "We take care that your call for beauty is addressed with convenience. You can save big with offers and deals to treat yourself with salon services. Our pool of stylists are trusted with great reviews. You can easily book, reschedule and cancel your appointment through our app. Our payments are online. We maintain hygiene and ensure safety. At My Stylist, we deliver our best for our customers to enjoy a hassle-free experience.",
                },
              ].map((faq, index) => (
                <div key={index} className="col-md-6 wow fadeInUp mb-4">
                  <div className="faq-box">
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-section-inner">
            <div className="row gx-md-5">
              <div className="col-md-12 wow fadeInUp">
                <div className="contact-form form-area">
                  <h3 className="mb-3">Send us an email</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Your Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Business Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Business Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Message</label>
                          <textarea
                            className="form-control"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
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
                  <a
                    href="#"
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/img/apple-store.svg"
                      alt="Download on App Store"
                      width={160}
                      height={48}
                    />
                  </a>
                  <a
                    href="#"
                    className="wow fadeInUp"
                    data-wow-duration="1.5s"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/img/google-store.svg"
                      alt="Download on Google Play"
                      width={160}
                      height={48}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default FaqPage;
