"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";
import "../../page.module.css";
import "../../booking.css";
import "../../embala.css";
import "../../globals.css";
import "../../IdealBankSectionStyles.css";
import "../../responsive.css";
import "../../styles.css";
import Image from "next/image";
const SpecialEventd = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/special-event/`
        );
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-100" id="special">
      <div
        className="pt-5 rounded"
        style={{ backdropFilter: "brightness(0) grayscale(100%)" }}
      >
        <div className="text-center text-light my-5">
          <h1>
            {" "}
            <span className="text-danger nuts-f">Upcoming</span> Events
          </h1>
        </div>
        <div
          id="specialCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ height: "50vh", overflow: "hidden" }}
        >
          <div className="carousel-indicators">
            {events.map((eventslide, index) => (
              <button
                key={index}
                type="button"
                className={index == 0 ? "active" : ""}
                data-bs-target="#specialCarousel"
                data-bs-slide-to={index}
                aria-label={"Slide" + index}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {events.map((event, index) => (
              <React.Fragment key={event.id}>
                {index == 0 ? (
                  <div
                    data-bs-interval="2000"
                    className="carousel-item active fw-bold"
                  >
                    <div className="row justify-content-center align-items-center h-100">
                      <div className="col-md-6">
                        <div
                          className="align-items-stretch"
                          style={{
                            height: "350px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            position: "relative",
                          }}
                        >
                          <div className="eventDate" style={{ zIndex: "9" }}>
                            <div className="eventDateText">
                              {event.startDate}
                            </div>
                          </div>
                          <div
                            className="col-12 p-0 h-100"
                            style={{ overflow: "hidden" }}
                          >
                            <Image
                              width={100}
                              height={100}
                              className="w-100 h-100 fw-bold"
                              style={{ objectFit: "cover" }}
                              src={event.image}
                              alt="Image Title"
                            />
                          </div>
                          <div
                            className="col-12 m-0 p-0 bg-white row align-items-center justify-content-center"
                            style={{
                              position: "absolute",
                              top: "63px",
                              opacity: "0.777",
                            }}
                          >
                            <div className="text-center col-11">
                              <h1 className="text-dark text-uppercase fw-bold">
                                {event.title}
                              </h1>
                              <div className="text-dark">
                                {event.description}
                              </div>
                              <div className="row text-center mt-1">
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return (
                                          <span className="fw-bold">
                                            {days}
                                          </span>
                                        );
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Days
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return (
                                          <span className="fw-bold">
                                            {hours}
                                          </span>
                                        );
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Hours
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return (
                                          <span className="fw-bold">
                                            {minutes}
                                          </span>
                                        );
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Minuets
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return (
                                          <span className="fw-bold">
                                            {seconds}
                                          </span>
                                        );
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Seconds
                                  </h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center mx-auto w-75 mt-2">
                                {/* <button className='btn btn-link text-danger'>Book now</button> */}
                                <Link href="/reservation">
                                  <button className="btn btn-link text-danger">
                                    Book now -&gt;
                                  </button>
                                </Link>
                                <Link href={`/events/${event.id}`}>
                                  <button className="btn btn-link text-danger">
                                    View details -&gt;
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div data-bs-interval="2000" className="carousel-item">
                    <div className="row justify-content-center align-items-center h-100">
                      <div className="col-md-6">
                        <div
                          className="align-items-stretch"
                          style={{
                            height: "350px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            position: "relative",
                          }}
                        >
                          <div className="eventDate" style={{ zIndex: "9" }}>
                            <div className="eventDateText">
                              {event.startDate}
                            </div>
                          </div>
                          <div
                            className="col-12 p-0 h-100"
                            style={{ overflow: "hidden" }}
                          >
                            <Image
                              width={100}
                              height={100}
                              className="w-100 h-100"
                              style={{ objectFit: "cover" }}
                              src={event.image}
                              alt="Image Title"
                            />
                          </div>
                          <div
                            className="col-12 m-0 p-0 bg-white row align-items-center justify-content-center"
                            style={{
                              position: "absolute",
                              top: "63px",
                              opacity: "0.777",
                            }}
                          >
                            <div className="text-center col-11">
                              <h1 className="text-dark text-uppercase fw-bold">
                                {event.title}
                              </h1>
                              <div className="text-dark">
                                {event.description}
                              </div>
                              <div className="row text-center mt-1">
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return <span>{days}</span>;
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Days
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return <span>{hours}</span>;
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Hours
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return <span>{minutes}</span>;
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Minuets
                                  </h6>
                                </div>
                                <div className="col-3">
                                  <h1 className="text-danger fw-bold">
                                    <Countdown
                                      date={event.startDate}
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                      }) => {
                                        return <span>{seconds}</span>;
                                      }}
                                    />
                                  </h1>
                                  <h6 className="text-secondary text-uppercase fw-bold">
                                    Seconds
                                  </h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center mx-auto w-75 mt-2">
                                {/* <button className='btn btn-link text-danger'>Book now</button> */}
                                <Link href="/reservation">
                                  <button className="btn btn-link text-danger fw-bold">
                                    Book now -&gt;
                                  </button>
                                </Link>
                                <Link href={`/events/${event.id}`}>
                                  <button className="btn btn-link text-danger">
                                    View details -&gt;
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialEventd;
