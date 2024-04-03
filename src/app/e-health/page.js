import React from 'react'
import Link from "next/link";
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
import Heder from '../components/about/Heder';
const page = () => {
  return (
    <div>
      <Heder title={"E-Health"} image={"ehHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <h2>E-Health</h2>{" "}
        <p>
          To support the treatment, MiSi NeuroPsy also uses the following
          eHealth supports (via Embloom and Therapieland). Read more information
          about our method and treatments here.
        </p>
        <h3> Support eHealth</h3>
        <ul>
          <li> Questionnaires (Dutch and English)</li>
          <li>
            {" "}
            Psychoeducation in the form of treatment: e.g. digital care,
            introduction ACT, introduction CBT, introduction scheme therapy,
            etc.
          </li>
          <li>
            {" "}
            Psychoeducation in case of a complaint: e.g. anxiety complaints,
            assertiveness problems, worrying, dealing with stress, grief, etc.
          </li>
          <li>
            {" "}
            Psychoeducation in the case of a disorder: e.g. depressive disorder,
            generalized anxiety disorder, post-traumatic stress disorder,
            general personality disorder, etc.
          </li>
          <li>
            {" "}
            Exercises with eg CBT, ACT, mindfulness, schema therapy, positive
            psychology, general etc.
          </li>
          <li>
            {" "}
            Diaries: e.g. activity diary, anxiety diary, worry diary etc.
          </li>
          <li>
            {" "}
            Self-help modules from the Mirro foundation: e.g. fear &amp; panic,
            money worries, less worrying, bereavement etc.
          </li>
          <li>
            {" "}
            Treatment modules: eg ACT, depression, generalized anxiety disorder,
            panic, sleep, etc.
          </li>
        </ul>
        <p>
          {" "}
          We offer various{" "}
          <a href="//tools-videos-en-links/">tools, videos and links</a> about
          psycho-education, EMDR and behavioral patterns, among other things.
        </p>
        <h3> Contact</h3>
        <p>
          {" "}
          Would you like more information about eHealth support? Please do not
          hesitate to contact us.
        </p>
        <Link href="/contact" className="btn-sm btn-dark">
          <p className="btn btn-sm btn-dark">Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default page