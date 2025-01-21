"use client"; 

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Privacy/Banner";

// Dynamically import components
const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));
const SingleButton = dynamic(() => import("@/Components/SingleButton"));

const AssignmentExpertPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Data Protection Commitment</title>
      </Head>
      <Navbar />
      <Banner />
      <SingleButton />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default AssignmentExpertPage;
