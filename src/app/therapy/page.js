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
      <Heder title={"Therapy"} image={"tpHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <h2>Therapy</h2> <p>The treatments we offer are:</p>
        <ul>
          <li> Depressive disorder</li>
          <li> Anxiety Disorder (PTSD, Compulsion, Phobias)</li>
          <li> Autism spectrum disorder</li>
          <li> ADHD</li>
          <li> Personality issues</li>
        </ul>
        <p>
          {" "}
          More information about our treatments, treatment methods and our
          working method can be found <a href="/onze-werkwijze">here</a> .
        </p>
        <h3> Contact</h3>
        <p>
          {" "}
          Do you have questions about the above treatments? Please feel free to
          contact us via the contact form. We can also be reached by phone and
          email.
        </p>
        <Link href="/contact" className="btn-sm btn-dark">
          <p className="btn btn-sm btn-dark">Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default page