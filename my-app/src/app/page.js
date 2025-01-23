"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Banner from "@/Components/Home/Banner";

// Dynamically import non-critical components
const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));
const SingleButton = dynamic(() => import("@/Components/SingleButton"));
const Faq = dynamic(() => import("@/Components/Home/Faq"));
const OurWork = dynamic(() => import("@/Components/Home/OurWork"));
const Services = dynamic(() => import("@/Components/Home/Services"));
const Brands = dynamic(() => import("@/Components/Home/Brands"));
const Award = dynamic(() => import("@/Components/Home/Award"));
const Worth = dynamic(() => import("@/Components/Home/Worth"));

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Helper function to scroll and update the URL
  const handleScrollToSection = (ref, section) => {
    console.log(`Scrolling to ${section}`);
    console.log("Ref current:", ref.current);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      // Update URL with hash without reloading the page
      window.history.pushState(null, "", `#${section}`);
    }
  };

  // Scroll to the section based on URL hash when loading the page
  useEffect(() => {
    const section = window.location.hash.replace("#", "");
    console.log("Initial load section:", section);
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact-us" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>
          British PhD Writers Uk - Providing Writing Consultancy by PhD Experts
        </title>
        <meta name="description" content="Home page description here" />
        {/* Add smooth scrolling behavior via CSS */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <Banner />
      <Services />
      <OurWork />
      <Brands />
      <Award />
      <Faq />
      <Worth />
      <SingleButton />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default Home;
