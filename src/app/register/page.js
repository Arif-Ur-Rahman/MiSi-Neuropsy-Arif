"use client";
import React from "react";
import { useRouter } from "next/router";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import LanguageDropdown from "../components/header/LanguageDropdown";

const page = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center" style={{ fontSize: "3rem" }}>
          <div
            className="btn btn-link"
            onClick={() => router && router.back()}
            style={{ fontSize: "3rem" }}
          >
            {" "}
            <BiLeftArrowAlt />
          </div>
          Register
        </div>
        <LanguageDropdown id="navbarLang2" navToggle={false} />
      </div>
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "600px" }}
      >
        <div className="col-md-6 border rounded shadow p-4">
          <h2 className="text-center"> Register </h2>

          <div className="floating-window-body">
            <form>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName"
                  placeholder=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Je bericht (verplicht)
                </label>
                <textarea
                  type="text"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Referral
                </label>
                <input
                  type="file"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Identity Card
                </label>
                <input
                  type="file"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>

              <div className="d-flex flex-column justify-content-center w-100 py-3">
                <div className="m-0 p-0">
                  <p>Have an account Please here</p>
                  <Link href="/login">
                    <button type="button" className="btn btn-link px-1">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
              <a className="btn-next btn btn-dark">
                SignUp
                <BiRightArrowAlt className="ms-1" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
