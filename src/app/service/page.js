import Head from "next/head";
import React from "react";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import Heder from "../components/about/Heder";
import ScrollToTop from "../components/scrolling/ScrollToTop";
import ServiesText from "../components/service/ServiesText";
import Prices from "../components/prices/Prices";

const service = () => {
  return (
    <div>
      <Head>
        <title>Services | Misi Nueropsy</title>
        <meta
          name="description"
          content="Sensehair is a saloon shop website with an appointment/booking system."
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heder title={"Services"} image={"serviceHeader"} />
      <ScrollToTop />
      <ServiesText />
      <Prices />
    </div>
  );
};

export default service;
