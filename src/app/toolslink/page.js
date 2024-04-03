import React from "react";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import "@/app/referrers/referrers.css";
import Heder from "../components/about/Heder";

const page = () => {
  return (
    <div>
      <Heder title={"Tools Videos and Links"} image={"refHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <>
          <h2>Tools, videos and links</h2>
          <p>
            Below we have listed different types of tools, videos and links to
            gain more insight.
          </p>
          <h3>Psychoeducation and insight</h3>
          <h3>
            <em>Depression</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=XiCrniLQGYc"
                target="_blank"
                rel="noreferrer"
              >
                I had a black dog, his name was depression.
              </a>
            </li>
          </ul>
          <h3>
            <em>Emotions</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=SJOjpprbfeE&feature=youtu.be"
                target="_blank"
                rel="noreferrer"
              >
                Alfred &amp; shadow, what are emotions, how to deal with
                emotions?
              </a>
            </li>
          </ul>
          <h3>
            <em>Autism</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://vimeo.com/52193530"
                target="_blank"
                rel="noreferrer"
              >
                Sensor overload
              </a>
              <br />
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=yhRRHL2FNOw"
                target="_blank"
                rel="noreferrer"
              />
            </li>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=yhRRHL2FNOw"
                target="_blank"
                rel="noreferrer"
              >
                Explain autism TV about social coherence
              </a>
              <br />
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=DR6vKwQgWNo"
                target="_blank"
                rel="noreferrer"
              />
            </li>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=DR6vKwQgWNo"
                target="_blank"
                rel="noreferrer"
              >
                Explanation autism TV about executive functions
              </a>
            </li>
          </ul>
          <h3>
            <em>EMDR</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://youtu.be/FubVAveULcU"
                target="_blank"
                rel="noreferrer"
              >
                How does EMDR work?
              </a>
            </li>
          </ul>
          <h3>
            <em>Burnout</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://vimeo.com/87475678"
                target="_blank"
                rel="noreferrer"
              >
                Recipe for a burnout
              </a>
            </li>
          </ul>
          <h3>
            <em>Acceptance and commitment therapy</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://www.timetoact.nl/"
                target="_blank"
                rel="noreferrer"
              >
                ACT Therapy
              </a>
            </li>
          </ul>
          <h3>
            <em>Relaxation</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://www.headspace.com/headspace-meditation-app"
                target="_blank"
                rel="noreferrer"
              >
                Headspace meditation
              </a>
            </li>
          </ul>
          <h3>
            <em>Behavioral patterns/personality</em>
          </h3>
          <ul>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=iCvmsMzlF7o"
                target="_blank"
                rel="noreferrer"
              >
                The power of vulnerability
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=RSd317TLlbc&t=196s"
                target="_blank"
                rel="noreferrer"
              />
            </li>
            <li>
              <a
                className="custom-a"
                href="https://www.youtube.com/watch?v=RSd317TLlbc&t=196s"
                target="_blank"
                rel="noreferrer"
              >
                The narcissistic circle
              </a>
            </li>
          </ul>
          <p>
            <a
              target="_blank"
              href="https://www.misineuropsy.nl/uploads/21/Activiteitenlijst.pdf"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              DOWNLOAD ACTIVITY LIST
            </a>
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.misineuropsy.nl/uploads/21/G-schema%20MiSi%20NeuroPsy.pdf"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              DOWNLOAD G SCHEDULE
            </a>
          </p>
        </>
      </div>
    </div>
  );
};

export default page;
