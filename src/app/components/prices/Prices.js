"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/embala.css";
import "@/app/booking.css";
import "@/app/styles.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const Prices = () => {
  const [match, setMatch] = useState(false);

  const [services, setServices] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/service/`
        );
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    const onChange = (e) => setMatch(e.matches);
    setMatch(mediaMatch.matches);
    mediaMatch.addEventListener("change", onChange);
    return () => mediaMatch.removeEventListener("change", onChange);
  }, []);
  return (
    <section id="prices">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-5">
            <div className="d-flex justify-content-center">
              <h1 className="h1-margin-bottom text-center"></h1>
            </div>
            <div
              className="prices-row prices-row-1 row text-center mb-5"
              style={{ height: match ? "900px" : "1450px" }}
            >
              {services.map((service, index) => (
                <div
                  key={service.name}
                  data-aos={index % 2 == 0 ? "zoom-in-down" : "zoom-in-up"}
                  data-aos-duration="1000"
                  className="col-6 col-md-4 mb-3 cats"
                >
                  <div className=" catsContent" style={{ height: "100%" }}>
                    <div className="rounded-5 frontSide">
                      <div style={{ height: "250px" }}>
                        <Image
                          width={100}
                          height={100}
                          loading="lazy"
                          src={service.image}
                          style={{ width: "auto", height: "100%" }}
                          alt="1.png"
                        />
                      </div>
                      <div className="p-2 d-flex align-items-center justify-content-center w-100 text-center">
                        <div>
                          <h3 className="text-dark">{service.name}</h3>
                          <p> {service.description} </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-5 backSide"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        className="w-100 h-100 row align-items-center justify-content-center"
                        style={{ backdropFilter: "blur(10px) brightness(0.7)" }}
                      >
                        <div className="col-12">
                          <div>
                            <Link href={service.href}>
                              <button className="my-2 btn btn-link text-light">
                                View details
                              </button>
                            </Link>
                          </div>
                          <div>
                            <Link href="/contact">
                              <button className="my-2 btn btn-dark ">
                                Contact
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
