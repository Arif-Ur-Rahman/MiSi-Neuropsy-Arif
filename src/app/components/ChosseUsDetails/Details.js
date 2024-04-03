"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";

const Details = () => {
  const [whyUs, setWhyUs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/why-choose-us/`
        );
        const data = await res.json();
        setWhyUs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <section id="why-us" className="pt-3">
      <div className="container">
        <div className="row pt-5">
          <div className="col py-5 text-center">
            <div className="row m-5">
              {whyUs.map((whyUs, index) => (
                <div className="px-5" key={whyUs.id}>
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
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center mt-3">
          <div className="col-3">
            <h1 className="fw-bolder">
              <CountUp duration={3} useEasing start={100} end={200} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button
                      id="clickButton"
                      style={{ display: "none" }}
                      onClick={start}
                    >
                      Start
                    </button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6 className="fw-bolder">Visitors daily</h6>
          </div>
          <div className="col-3">
            <h1 className="fw-bolder">
              <CountUp duration={3} useEasing start={0} end={30} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button
                      id="clickButton2"
                      style={{ display: "none" }}
                      onClick={start}
                    >
                      Start
                    </button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6 className="fw-bolder">Therapists</h6>
          </div>
          <div className="col-3">
            <h1 className="fw-bolder">
              <CountUp duration={3} useEasing start={0} end={100} suffix="%">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button
                      id="clickButton3"
                      style={{ display: "none" }}
                      onClick={start}
                    >
                      Start
                    </button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6 className="fw-bolder">Positive feedback</h6>
          </div>
          <div className="col-3">
            <h1 className="fw-bolder">
              <CountUp duration={3} useEasing start={0} end={50} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button
                      id="clickButton4"
                      style={{ display: "none" }}
                      onClick={start}
                    >
                      Start
                    </button>
                  </div>
                )}
              </CountUp>
            </h1>
            <h6 className="fw-bolder">Awards & honors</h6>
          </div>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default Details;
