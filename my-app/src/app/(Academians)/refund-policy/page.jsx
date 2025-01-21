"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/RefundPolicy/Banner";

// Dynamically import components

const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));

const ReviewPage = () => {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/#about");
  };


  return (
    <>
      <Head>
        <title>Refund-Policy - British Phd Writers.</title>
        <meta
          name="description"
          content="Read British Phd Writers Refund Policy. Understand our terms and conditions for refunds and how we ensure customer satisfaction."
        />
      </Head>
      <Navbar
        handleAboutClick={handleAboutClick}
      />
      <Banner/>
      <Footer />
      <StickyBtn />
    </>
  );
};

export default ReviewPage;
