"use client";

import Image from "next/image";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";

export default function PassionSection() {
  return (
    <section className="our-passion-section">
      <div className="container">
        <div className="our-passion-section-inner">
          <div className="row">
            {/* Left Content */}
            <div className="col-md-6">
              <FadeUpContainer>
              <h2 className="mb-3">Experienced and Updated Stylists</h2>
              <p className="mb-4">
                Our fashion-forward stylists keep themselves updated with the
                ins and outs of the industry. They are certified trainers with
                experience in catering to a vast range of clients, where
                individuality makes acquaintance with the pulse of the current
                fashion scenario. Our team of experts are well-equipped with
                relevant skills. They have mastered the craft to the T over many
                years of practice. Our professional stylists are dedicated to
                deliver exceptional service. Their ratings and reviews speak for
                their work and reflect their passion towards bringing a vision
                to life with absolute ease.
              </p>

              {/* Feature Grid */}
              <div className="row">
                <div className="col-md-6 wow fadeInUp" data-wow-duration="0.5s">
                  <div className="d-flex position-relative our-passion-box align-items-center">
                    <div className="flex-shrink-0 me-2 our-passion-box-count">
                      1.
                    </div>
                    <div className="our-passion-box-text">
                      <h6>Expertise</h6>
                      <p className="mb-0">
                        Our stylists are well-trained and experienced to deliver
                        your desired outcome in beauty & wellness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wow fadeInUp" data-wow-duration="1s">
                  <div className="d-flex position-relative our-passion-box align-items-center">
                    <div className="flex-shrink-0 me-2 our-passion-box-count">
                      2.
                    </div>
                    <div className="our-passion-box-text">
                      <h6>Quality Products</h6>
                      <p className="mb-0">
                        To ensure exceptional results, all our stylists use only
                        the best-quality and 100% original products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                  <div className="d-flex position-relative our-passion-box align-items-center">
                    <div className="flex-shrink-0 me-2 our-passion-box-count">
                      3.
                    </div>
                    <div className="our-passion-box-text">
                      <h6>Client-Centered</h6>
                      <p className="mb-0">
                        Our stylists tailor services to align with your
                        expectations and ensure satisfaction of every customer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wow fadeInUp" data-wow-duration="2s">
                  <div className="d-flex position-relative our-passion-box align-items-center">
                    <div className="flex-shrink-0 me-2 our-passion-box-count">
                      4.
                    </div>
                    <div className="our-passion-box-text">
                      <h6>Hygiene & Safety</h6>
                      <p className="mb-0">
                        Our stylists adhere to strict hygiene & safety standards
                        to maintain a clean and reliable environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#download-apps" className="btn-green mt-3">
                Download Now
              </a>
              </FadeUpContainer>
            </div>

            {/* Right Image */}
            <div className="col-md-6">
              <figure className="d-md-none">
                <Image
                  src="/assets/img/our-passion-section-img.png"
                  alt="Our Passion"
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
