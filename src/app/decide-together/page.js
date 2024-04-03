import React from 'react'
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
import Link from "next/link";
import Heder from '../components/about/Heder';
const page = () => {
  return (
    <div>
      <Heder title={"Decide Together"} image={"dtHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <h2>The practitioner and you</h2>{" "}
        <p>
          The match between the practitioner and you is central, because you are
          central to us. You can choose from practitioners of various ages, male
          / female, cultural backgrounds and practitioners who speak a language
          other than Dutch. We work as practitioners (neuro) psychologists,
          youth psychologists, medical psychologists, Gz psychologists and a
          Psychotherapist / Clinical Psychologist.
        </p>
        <h3> Most common forms of treatment that we offer</h3>
        <p>
          {" "}
          The most common forms of treatment that our therapists can offer you
          are: CBT, IPT, EMDR, MBT, ACT, DBT, EFT, MBCT, Schema Therapy,
          Multi-System Therapy and Psychodynamic Therapy. The treatments at MiSi
          NeuroPsy can be given in Dutch, English, Spanish, Russian, Farsi,
          Dari, Moroccan (Berber and Arabic), classical Arabic, Somali, Modern
          Hindi and Punjabi.
        </p>
        <h3> Together we look at what suits you best</h3>
        <p>
          {" "}
          In short, there are many options so that we can match you with a
          practitioner as optimally as possible. From the first meeting with
          you, we look at which practitioner best suits your care needs and
          together we change this as necessary afterwards. The treatment team is
          at your service throughout the week. This is Monday to Saturday from
          9:00 am to 9:00 pm. The preferred times of the practitioners are on
          weekdays between 09: 00-17: 00, but if your work / study and / or home
          situation requires appointments in the evenings or on Saturdays, this
          is also possible.
        </p>
        <h3> Contact</h3>
        <p>
          {" "}
          Do you have questions about treatments or other questions? Please do
          not hesitate to contact us. We are ready for you.
        </p>
        <p>
          <Link className="btn btn-sm btn-dark" href="/contact">
            CONTACT
          </Link>
        </p>
      </div>
    </div>
  )
}

export default page