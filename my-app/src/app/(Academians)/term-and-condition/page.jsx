"use client";

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Terms/Banner";

// Dynamically import components
const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));
const SingleButton = dynamic(() => import("@/Components/SingleButton"));

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | Your Research Publication Partner</title>
      </Head>
      <Navbar />
      <Banner />

      <SingleButton />
      <Footer />

      <StickyBtn />
    </div>
  );
};

export default TermsPage;
