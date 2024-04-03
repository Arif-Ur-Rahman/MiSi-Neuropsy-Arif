"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heder from "../../components/about/Heder";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";

const Page = ({ params }) => {
  const [whyUs, setWhyUs] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/why-choose-us/${params.id}`
        );
        const data = await res.json();
        setWhyUs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heder title={"Why choose us?"} image={"serviceHeader"}></Heder>
      <section id="why-us" className="pt-3">
        <div className="container">
          <div className="row pt-5">
            <div className="col py-5 text-center">
              <div className="row m-5">
                <div className="px-5">
                  <Image
                    width="120"
                    height="120"
                    loading="lazy"
                    src={whyUs.image}
                    alt="icon 1"
                  />
                  <h4 className="mt-4 mb-4 fLoto fw-bold">{whyUs.title}</h4>
                  <p className="h-30">{whyUs.description}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: whyUs.details_information,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
