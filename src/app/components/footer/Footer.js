"use client";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import "@/app/responsive.css";
import "@/app/styles.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/page.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import imageLogoBig from "@../../../public/images/misilogo.png";
import Map from "@/app/components/contact/Map";
import Image from "next/image";
import LanguageDropdown from "../header/LanguageDropdown";
const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-white w-100 text-black text-center text-md-start py-5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-3 mb-5">
              <Image
                loading="lazy"
                src={imageLogoBig.src}
                alt="logo1"
                className="mb-3"
                width={100}
                height={100}
              />

              <div className="editable-text left">
                <h2></h2>
                <p>MiSi Neuropsy&nbsp;</p>
                <p>
                  <strong>Locatie</strong>
                  <br />
                  Head office / postal address
                  <br />
                  Weena 742A
                  <br />
                  3014 DA Rotterdam
                </p>{" "}
                <p>
                  <strong>Treatment location</strong>
                  <br />
                  Weena 732, 11th floor.
                  <br />
                  3014 DA Rotterdam
                </p>
                <p>
                  <strong>Opening hours</strong>
                  <br />
                  Every day 08:00-20:00, except Sunday.
                </p>
              </div>

              <ul className="social-nav navbar-nav flex-row justify-content-center justify-content-md-start mb-4">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-black active" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" href="/about">
                    AboutUs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" href="/service">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black" href="/career">
                    Career
                  </Link>
                </li>
              </ul>
              <LanguageDropdown></LanguageDropdown>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <h2>CONTACT</h2>
              <div className="editable-text left">
                <h2></h2>{" "}
                <p>
                  <strong>Telefoon</strong>
                  <br />
                  <Link href="Tel:+316%202818%203284">+316 2818 3284</Link>
                  &nbsp;(Voor zorginhoudelijke vragen, 24/7 bereikbaar)
                  <br />
                  +3110 333 1901
                </p>{" "}
                <p>
                  <strong>E-mail</strong>
                  <br />
                  <Link href="http://mailto:info@misineuropsy.nl">
                    info@misineuropsy.nl
                  </Link>
                  &nbsp;(algemeen)
                  <br />
                  <Link href="mailto:Zorg@misineuropsy.nlZorg@misineuropsy.nl">
                    zorg@misineuropsy.nl
                  </Link>
                  &nbsp;(aanmelden/zorgvragen)
                </p>
              </div>
            </div>
            <div
              className="col-lg-3"
              style={{ overflow: "hidden", height: "350px" }}
            >
              <Map />
            </div>
          </div>
        </div>
      </footer>
      <div id="dream-diver" className="bg-dark w-100 text-white py-2">
        <div className="container">
          <p className="text-end mb-0">
            Developed
            <Link
              href="https://www.linkedin.com/in/sakib6619/"
              className="text-light"
            >
              {" "}
              by
            </Link>{" "}
            <Link
              href="https://dreamdiver.nl/"
              rel="noreferrer"
              className="text-dreamDiver"
            >
              DREAM DIVER
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
