"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Top Section */}
          <div className="widget-area">
            <div className="row justify-content-between">
              {/* Logo + Social */}
              <div className="col-md-4">
                <figure>
                  <Link href="/">
                    <Image
                      src="/img/logo-footer.png"
                      alt="MyStylist Footer Logo"
                      width={160}
                      height={60}
                      className="img-fluid"
                    />
                  </Link>
                </figure>
                <ul className="social-icons">
                  <li className="li-facebook">
                    <a href="#" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="li-instagram">
                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="li-linkedin">
                    <a href="#" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="li-youtube">
                    <a href="#" aria-label="YouTube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-md-3">
                <h4>Contact Us</h4>
                <ul className="contact-info">
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+91-7070656562">+91-7070656562</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:info@mystylist.in">info@mystylist.in</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>
                      MyStylist App, RoSe Technologies, SpaceJam Co Working,
                      Plot No 1273, 3rd Floor, Sector 82, Mohali 160055
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subscribe */}
              <div className="col-md-4">
                <h4>Subscribe</h4>
                <div className="subscribe-form">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      aria-label="Email address"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn" type="button" id="button-addon2">
                      <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <p className="mb-0">
                  Copyright © 2024 MyStylist.in All rights reserved
                </p>
              </div>
              <div className="col-md-6">
                <figure className="mb-0 text-end">
                  <Image
                    src="/img/cards.png"
                    alt="Payment Cards"
                    width={240}
                    height={40}
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
