"use client";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import TawkToComponent from "@/Components/TawkToComponent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const DiscountModal = dynamic(() => import("@/Components/DiscountModel"));

// Using 'swap' to optimize font loading behavior
// const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  const gtmId = "GTM-5JTC4XX3";

  const pathname = usePathname();

  useEffect(() => {
    // Define the titles for each route
    const titles = {
      "/": "British PhD Writers - Providing Writing Consultancy by PhD Experts",
      "/thankyou": "Thank You - British PhD Writers.",
      "/reviews": "Reviews - British PhD Writers.",
      "/assignment-help": "Assignment Help - British PhD Writers.",
      "/dissertation-help": "Dissertation Help - British PhD Writers.",
      "/essay-help": "Essay Help - British PhD Writers.",
      "/online-exam": "Online Exam Help - British PhD Writers.",
      "/coursework-help": "Coursework Help - British PhD Writers.",
      "/research-proposal": "Research Proposal Help - British PhD Writers.",
      "/order-now": "Order Now - British PhD Writers.",
      "/privacy-policy": "Privacy Policy | Data Protection Commitment",
      "/refund-policy": "Refund-Policy - British PhD Writers.",
      "/term-and-condition": "Terms and Conditions | British PhD Writers.",
    };

    // Normalize the current route path
    const normalizedPathname = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    const pageTitle =
      titles[normalizedPathname] ||
      "British PhD Writers - Providing Writing Consultancy by PhD Experts";
    document.title = pageTitle;

    // Notify Tawk.to
    const notifyTawkTo = () => {
      if (typeof window.Tawk_API !== "undefined") {
        try {
          window.Tawk_API.addEvent("page", {
            title: pageTitle,
            url: window.location.href,
          });
          console.log(`Tawk.to updated with page title: ${pageTitle}`);
        } catch (error) {
          console.error("Error notifying Tawk.to:", error);
        }
      } else {
        console.warn("Tawk_API not ready yet. Retrying...");
        setTimeout(notifyTawkTo, 500); // Retry after 500ms
      }
    };

    // Ensure Tawk.to widget is initialized
    const initializeTawkTo = () => {
      if (typeof window.Tawk_API !== "undefined") {
        console.log("Tawk.to widget initialized.");
        notifyTawkTo();
      } else {
        console.warn("Tawk.to not fully initialized. Retrying...");
        setTimeout(initializeTawkTo, 500); // Retry after 500ms
      }
    };

    // Attach Tawk.to `onLoad` event
    if (typeof window.Tawk_API !== "undefined" && window.Tawk_API.onLoad) {
      window.Tawk_API.onLoad = () => {
        console.log("Tawk.to chat widget fully initialized.");
        notifyTawkTo();
      };
    } else {
      initializeTawkTo(); // Retry until widget is ready
    }
  }, [pathname]); // Dependency only on `pathname`

  return (
    <html lang="en">
      <Head>
        <meta name="description" content="" />

        {/* Preload GTM script to optimize loading performance */}
        <link
          rel="preload"
          href={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          as="script"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body className={outfit.className}>
        {/* Lazy load Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload" // Lazy load GTM script to load after all resources are fully loaded
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />

        <Script
          src="https://webclicksees.onrender.com/script.js"
          strategy="lazyOnload"
        />

        {/* noscript fallback for GTM */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        {children}

        <TawkToComponent />
        <DiscountModal />
      </body>
    </html>
  );
}
