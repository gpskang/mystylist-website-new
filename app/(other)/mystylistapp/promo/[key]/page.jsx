"use client";

import { useEffect } from "react";

export default function userDeepLink() {
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.mystylist.user";
  const APP_STORE_URL =
    "https://apps.apple.com/us/app/mystylist-book-a-stylist/id6475633914";

  const openApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    const url = new URL(window.location.href);
    const query = url.search || "";
    const deepLink = `mystylist://profile${query}`;

    if (isIOS) {
      window.location.href = deepLink;
      setTimeout(() => {
        window.location.href = APP_STORE_URL;
      }, 1500);
    } else if (isAndroid) {
      const fallback = encodeURIComponent(PLAY_STORE_URL);
      const intentUrl = `intent://profile${query}#Intent;scheme=mystylist;package=com.mystylist.user;S.browser_fallback_url=${fallback};end`;
      window.location.replace(intentUrl);
    } else {
      const statusEl = document.getElementById("status-message");
      const fallbackEl = document.getElementById("fallback-link");
      if (statusEl) statusEl.textContent = "Please open this link on your mobile device.";
      if (fallbackEl) fallbackEl.style.display = "block";
    }
  };

  useEffect(() => {
    openApp();
    const loader = document.getElementById("pageLoader");
    if (loader) loader.style.display = "none";
  }, []);

  return (
    <div className="relative text-center pt-12 font-sans">
      <div
        id="pageLoader"
        className="fixed left-0 top-0 w-full h-full z-50 bg-white flex justify-center items-center"
        style={{
          background: `url(/img/loader.gif) no-repeat center #fff`,
          backgroundSize: "50px",
        }}
      ></div>

      <p id="status-message" className="text-lg text-gray-800">
        Opening the MyStylist app...
      </p>

      <div id="fallback-link" className="mt-5 hidden">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openApp();
          }}
          className="text-blue-500 underline"
        >
          Try Again
        </a>
        <br />
        <br />
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Get the app on Google Play
        </a>
        <br />
        <br />
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Get the app on the App Store
        </a>
      </div>
    </div>
  );
}
