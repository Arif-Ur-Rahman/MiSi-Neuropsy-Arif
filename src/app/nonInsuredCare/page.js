'use client'
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
      <Heder title={"Insured and Uninsured Care"} image={"nicHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <>
          <h2>Insured care</h2>
          <p>
            <strong>Health insurers</strong>
          </p>
          <p>Update date: March 13, 2023:</p>
          <p>
            We can provide insured care for the following health insurers before
            2023:&nbsp;
          </p>
          <ul>
            <li>DSW (including DSW, Stad Holland and InTwente)</li>
            <li>
              VGZ (this includes: VGZ, Univé, Bewuzt, Zekur, IZZ, IZA, Zorgzaam
              and UMC)
            </li>
            <li>EU Care (Aevitea)</li>
            <li>
              Regulations for Medical Care Asylum Seekers (RMA) (formerly Doctor
              &amp; Care)
            </li>
            <li>Medical care scheme Displaced persons from Ukraine</li>
            <li>ASR and Ditzo&nbsp;</li>
            <li>Care and security</li>
            <li>ONVZ (this includes VvAA, ONVZ, Jaaah and PNO healthcare)</li>
            <li>
              CZ (also includes OHRA and NN)&nbsp;
              <br />
              For CZ insured persons: You will receive an invoice from us which
              you can then claim from CZ.&nbsp;See&nbsp;
              <Link href="https://www.cz.nl/zorgaanbieder/zorgsoorten/declareren-zonder-overeenkomst">
                link
              </Link>
            </li>
          </ul>
          <p>
            Are you looking for mental health care and are you insured with:
          </p>
          <ul>
            <li>
              Silver Cross?&nbsp;Go to&nbsp;
              <Link href="https://www.zilverenkruis.nl/consumenten/zorg-regelen/wachtlijstbemiddeling">
                : link
              </Link>
              &nbsp;
            </li>
            <li>
              FBTO?&nbsp;Go to:&nbsp;
              <Link href="https://www.fbto.nl/zorgverzekering/zorgadvies">link</Link>
            </li>
            <li>
              The Friesland?&nbsp;Go to&nbsp;
              <Link href="https://www.defriesland.nl/zorgwijzer/wachtlijstbemiddeling">
                : link
              </Link>
            </li>
            <li>
              Interpolis?&nbsp;Go to:&nbsp;
              <Link href="https://www.interpolis.nl/service/zorg/persoonlijke-hulp-bij-regelen-van-zorg">
                link&nbsp;
              </Link>
            </li>
            <li>
              Menzis (including Menzis, Anderzorg, HEMA and VinkVink) ?&nbsp;Go
              to:&nbsp;
              <Link href="https://www.menzis.nl/zorg-en-vergoedingen/wachtlijstbemiddeling">
                link
              </Link>
            </li>
          </ul>
          <p>
            Patients do not have to make a personal contribution for the care
            provided.&nbsp;NB: Patients must take into account the deductible
            (€385 in 2023).&nbsp;
          </p>
          <p>
            <br />
          </p>
          <h2>Uninsured care</h2>
          <p>
            In addition to insured care, we also offer non-insured care and
            services.&nbsp;You can contact us for relationship therapy, sleep
            disorder, support for burn-out complaints and various options for
            coaching and guidance.&nbsp;We apply a rate of 107 euros per session
            (relationship/system therapy 117 euros).
          </p>
          <ul>
            <li>Burnout (prevention)</li>
            <li>Relationship coaching&nbsp;</li>
            <li>Employment coaching</li>
            <li>Personal effectiveness</li>
            <li>Grief and loss processing</li>
            <li>Independent (neuro)psychological diagnostics</li>
          </ul>
          <p>
            At your first appointment, it is advisable to bring someone with you
            for further diagnostic information as well as to record the
            information that you are given.&nbsp;It is possible, in consultation
            with your practitioner, to allow your loved ones to participate in
            your appointments in the meantime and at the end.&nbsp;
          </p>
          <h3>More information or would you like to make an appointment?</h3>
          <p>
            Feel free to contact us by phone, email or fill in the contact form
            on the contact page.
          </p>
          <p>
            <Link className="btn btn-sm btn-dark" href="/contact">
              CONTACT
            </Link>
          </p>
        </>
      </div>
    </div>
  )
}

export default page