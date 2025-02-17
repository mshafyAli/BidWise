"use client";

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import NavBannerBg from "@/Components/WebService/NavBannerBg";


// Dynamically import non-critical components
const Footer = dynamic(() => import("@/Components/Footer"));
const Agency = dynamic(() => import("@/Components/WebService/Agency"));
const BusinessNeeds = dynamic(() =>
  import("@/Components/AboutSection/BusinessNeeds")
);
const DigitalPresence = dynamic(() => import("@/Components/WebService/DigitalPresence"));
const Services = dynamic(() => import("@/Components/WebService/Services"));
const StickyBtn = dynamic(() => import("@/Components/Home/StickyBtn"));

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          British PhD Writers Uk - Providing Writing Consultancy by PhD Experts
        </title>
        <meta name="description" content="Home page description here" />
      </Head>
      <NavBannerBg />
      <Agency />
      <BusinessNeeds />
      <Services />
      <DigitalPresence />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default Home;
