import React from "react";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import Map from "../components/contact/Map";
import Forminfo from "../components/contact/Forminfo";
import Heder from "../components/about/Heder";
import ScrollToTop from "../components/scrolling/ScrollToTop";

const contact = () => {
  return (
    <div>
      <Heder title={"Contact Us"} />
      <Forminfo />
      <ScrollToTop />
      <Map />
    </div>
  );
};

export default contact;
