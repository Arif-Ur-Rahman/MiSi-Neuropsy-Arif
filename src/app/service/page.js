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

export const metadata = {
  title: "Services | Misi Nueropsy",
  description:
    "The care MiSi NeuroPsy offers: therapy, diagnostic research and e-health.",
};

const service = () => {
  return (
    <div>
      <Heder title={"Services"} image={"serviceHeader"} />
      <ScrollToTop />
      <ServiesText />
      <Prices />
    </div>
  );
};

export default service;
