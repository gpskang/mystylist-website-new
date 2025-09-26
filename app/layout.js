import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.mystylist.app"),
  title: {
    default: "MyStylist – Book Beauty & Salon Services Near You",
    template: "%s | MyStylist",
  },
  description:
    "MyStylist helps you discover, compare and book top salon, spa and beauty services near you. Read verified reviews, browse portfolios and get exclusive offers.",
  keywords: [
    "MyStylist",
    "salon booking",
    "beauty services",
    "spa near me",
    "makeup artist",
    "hair stylist",
    "nail salon",
    "bridal makeup",
  ],
  authors: [{ name: "MyStylist Team" }],
  creator: "MyStylist",
  publisher: "MyStylist",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MyStylist",
    title: "MyStylist – Book Beauty & Salon Services Near You",
    description:
      "Discover, compare and book top-rated salons and beauty professionals. Transparent pricing, verified reviews and easy online bookings.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "MyStylist – Book Beauty & Salon Services",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyStylist – Book Beauty & Salon Services Near You",
    description:
      "Discover, compare and book top-rated salons and beauty professionals with MyStylist.",
    images: ["/placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "Beauty & Wellness",
  verification: {
    // Add your site-verification tokens if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="description" content="MyStylist helps you discover, compare and book top salon, spa and beauty services near you. Read verified reviews, browse portfolios and get exclusive offers." />
        <meta name="author" content="MyStylist" />
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
        <Script id="gtm" strategy="afterInteractive">{`
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start': new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-K6SVFC26');
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
