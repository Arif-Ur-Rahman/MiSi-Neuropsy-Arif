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
import "@/app/referrers/referrers.css";

const page = () => {
  return (
    <div>
      <Heder title={"Waiting times"} image={"waitHeader"}></Heder>
      <div>
        <ScrollToTop />
        <div className="container text editable-text left mt-5">
          <>
            <h2>Waiting times</h2>
            <p>
              Our waiting times are updated weekly (on Fridays).&nbsp;The
              current waiting times are:
            </p>
            <ul>
              <li>A first pre-intake assessment within 1 week.</li>
              <li>
                Waiting time from receipt of referral letter to first interview
                (intake): 5-6 weeks.
              </li>
              <li>
                Waiting time from the first consultation (intake) to the start
                of treatment: no waiting time.
              </li>
              <li>
                The waiting times of MiSi are published on the website in
                accordance with the Dutch Healthcare Authority (NZa)
                regulations.
              </li>
            </ul>
            <p>
              Read &nbsp; more about our working method&nbsp;
              <a
                className="custom-a"
                href="https://www.misineuropsy.nl/onze-werkwijze"
              >
                here .
              </a>
            </p>
            <p>
              <br />
            </p>
            <h3>Update corona</h3>
            <p>
              There are no more corona measures.&nbsp;But there are advice to
              limit the spread of the corona virus.&nbsp;To prevent
              contamination as much as possible, the basic advice still
              applies.&nbsp;The basic advice is: wash your hands, cough and
              sneeze into your elbow, stay at home if you have complaints and do
              a test and ensure sufficient fresh air.&nbsp;
            </p>
            <p>
              We would like to ask you to adhere to the basic advice at home, on
              the road and at our location.&nbsp;
            </p>
            <p>
              <br />
            </p>
            <h3>Register or contact us</h3>
            <p>
              Would you like to register with MiSi NeuroPsy?&nbsp;Then click
              &nbsp;
              <a
                className="custom-a"
                href="https://www.misineuropsy.nl/aanmelden"
              >
                here
              </a>{" "}
              . If you have any questions or comments, you can always contact
              us.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default page;
