"use client";

import Image from "next/image";
import React from "react";
import FadeUpContainer from "../../../components/animation/FadeUpContainer";

const DownloadSection= () => {
  return (
    <section className="download-section" id="download-apps">
      <div className="container">
        <div className="download-section-inner">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <FadeUpContainer>
              <h3 className="mb-3">Download the MyStylist app now!</h3>
              <div className="store-btns flex justify-center gap-4">
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
                    width={160}
                    height={48}
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
                    width={160}
                    height={48}
                  />
                </a>
              </div>
              </FadeUpContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
