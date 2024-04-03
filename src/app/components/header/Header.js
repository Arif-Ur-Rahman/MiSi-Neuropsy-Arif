"use client";
import MainMenu from "./MainMenu";
import slide1 from "@../../../public/images/header/header1.jpeg";
import slide2 from "@../../../public/images/header/header2.jpeg";
import slide3 from "@../../../public/images/header/header3.webp";
import React from "react";
import "swiper/css";
import "swiper/css/effect-creative";

const headerData = [
  {
    image: slide1,
    text: "Love your Life",
  },
  {
    image: slide2,
    text: "Turn the stress into strength",
  },
  {
    image: slide3,
    text: "Heal the heart",
  },
];

const HeaderText = ({ text, index }) => {
  return (
    <div
      id={`testAnim${index}`}
      className="mx-auto text-center w-100 testAnimSlideIn homeTexts"
    >
      {/* <p className="font-weight-600" style={{ fontSize: '3rem' }}  ><span style={{ fontFamily: "Grape Nuts",color:"transparent" }}> ... </span></p> */}
      <div className="font-weight-600 text-white" style={{ fontSize: "5rem" }}>
        {" "}
        {text}{" "}
      </div>
      {/* <div className='d-flex mt-5 justify-content-center align-items-center'>

        <Link href="/reservation">
          <button type="button" className=" btn posh-button text-light rounded-3 font-weight-900 " >
            <span>Register now</span>
          </button>
        </Link>

        <a href='https://pickup.deliverect.com/click_collect/menu/order/?res=schuimspaan&lang=nl' target="_" type="button" className=" btn posh-button text-light rounded-3 font-weight-900 ms-3" >
          <span>Order now</span>
        </a>
      </div> */}
    </div>
  );
};

function Header() {
  return (
    <header>
      <MainMenu isSlider={true} />
    </header>
  );
}

export default Header;
