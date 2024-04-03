import React from "react";
import Link from "next/link";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import Heder from "../components/about/Heder";
import "@/app/referrers/referrers.css";
const page = () => {
  return (
    <div>
      <Heder title={"Diagnostic research"} image={"drHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <h2>Diagnostic research</h2>{" "}
        <p>The diagnostics in the context of treatment that we can do:</p>
        <ul>
          <li> Neuropsychological Examination</li>
          <li> Personality research</li>
          <li> IQ research</li>
          <li> ADHD screening</li>
          <li> Autism screening</li>
        </ul>
        <p>
          {" "}
          You{" "}
          <a className="custom-a" href="/onze-werkwijze">
            can
          </a>{" "}
          read more information about our method and treatments{" "}
          <a className="custom-a" href="/onze-werkwijze">
            here
          </a>{" "}
          .
        </p>
        <h3> Contact</h3>
        <p>
          {" "}
          For questions or to make an appointment, you can always contact us.
        </p>
        <Link href="/contact" className="btn-sm btn-dark">
          <p className="btn btn-sm btn-dark">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
