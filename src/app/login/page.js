"use client";
import React from "react";
import Link from "next/link";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import LanguageDropdown from "../components/header/LanguageDropdown";
const page = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center" style={{ fontSize: "3rem" }}>
          <div
            className="btn btn-link"
            onClick={() => router.back()}
            style={{ fontSize: "3rem" }}
          >
            {" "}
            <BiLeftArrowAlt />
          </div>
          Login
        </div>
        <LanguageDropdown />
      </div>
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "600px" }}
      >
        <div className="col-md-6 border rounded shadow p-4">
          <h2 className="text-center"> Login </h2>
          <div className="floating-window-body row justify-content-center">
            <form>
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

              <div className="d-flex flex-column justify-content-center w-100 py-3">
                <div className="m-0 p-0">
                  <Link className="me-2" href="/forget">
                    forgotPass
                  </Link>
                  {/* {isLogin ?  : state.text.bookingAccountTextRegister} */}
                  <div>
                    <p>Dont have account click here </p>
                    <Link href="/register">
                      <button type="button" className="btn btn-link px-1">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            <button className="btn-next btn btn-dark w-25">
              Login
              <BiRightArrowAlt className="ms-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
