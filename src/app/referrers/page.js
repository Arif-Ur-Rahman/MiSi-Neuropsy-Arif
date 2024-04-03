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
      <Heder title={"Referrers"} image={"refHeader"}></Heder>
      <div className="container text editable-text left mt-5">
        <>
          <h2>Referrers</h2>
          <p>
            MiSi NeuroPsy provides care within the BGGZ/SGGZ (18+) in the center
            of Rotterdam (walking distance from the central station).&nbsp;We
            offer insured care for the following diagnosis groups:&nbsp;
          </p>
          <ul>
            <li>Mood Disorders (Depression/Anxiety)</li>
            <li>Personality</li>
            <li>Somatoform</li>
            <li>Dissociative</li>
            <li>Neurocognitive</li>
            <li>Developmental Disorders (Autism/ADHD)</li>
          </ul>
          <p>
            Excludes: Bipolar images, manifest psychotic disorders, active
            suicidality and/or self-mutilation, and severe neuropsychiatric
            images.&nbsp;Feel free to consult via&nbsp;
            <a href="tel:06-8143%207178">06-8143 7178</a> if you have any doubts
            about a particular reference.&nbsp;
          </p>
          <p>
            If desired, we also offer treatment in which the patient is
            central.&nbsp;Attention is paid to the diversity in the
            patient&apos;s background (linguistic, psychosocial and cultural
            background).
          </p>
          <p>
            <br />
          </p>
          <p>
            <br />
          </p>
          <h4>Update corona</h4>
          <p>
            There &nbsp;are no more corona measures.&nbsp;But there are advice
            to limit the spread of the corona virus.&nbsp;To prevent
            contamination as much as possible, the basic advice still
            applies.&nbsp;The basic advice is: wash your hands, cough and sneeze
            into your elbow, stay at home if you have complaints and do a test
            and ensure sufficient fresh air.&nbsp;
            <br />
            <br />
            We would like to ask you to adhere to the basic advice at home, on
            the road and at our location.&nbsp;
          </p>
          <p>
            <br />
          </p>
          <h2>Health insurers</h2>
          <p>
            <u>Update date: March 13, 2023:</u>
          </p>
          <p>
            We can provide insured care for the following health insurers before
            2023:&nbsp;
          </p>
          <p>
            <strong>Contracted Care:</strong>
            <br />
            DSW (covering DSW, Stad Holland and InTwente)
            <br />
            EU Care (Aevitea)
            <br />
            Medical Care Asylum Seekers Scheme (RMA) (formerly Doctor &amp;
            Care)
            <br />
            Medical Care Scheme Displaced Persons from Ukraine
            <br />
            ASR and Ditzo&nbsp;
            <br />
            ONVZ (covering VvAA, ONVZ, Jaaah and PNO care included)
            <br />
            VGZ (This includes: VGZ, Univé, Bewuzt, Zekur, IZZ, IZA, Zorgzaam
            and UMC)
          </p>
          <p>
            Are you looking for mental health care and are you insured with:
          </p>
          <p>
            Silver Cross?&nbsp;Go to:&nbsp;
            <a
              className="custom-a"
              href="https://www.zilverenkruis.nl/consumenten/zorg-regelen/wachtlijstbemiddeling"
            >
              link
            </a>
            <br />
            FBTO?&nbsp;Go to:&nbsp;
            <a
              className="custom-a"
              href="https://www.fbto.nl/zorgverzekering/zorgadvies"
            >
              link
            </a>
            <br />
            De Friesland?&nbsp;Go to:&nbsp;
            <a
              className="custom-a"
              href="https://www.defriesland.nl/zorgwijzer/wachtlijstbemiddeling"
            >
              link
            </a>
            <br />
            Interpolis?&nbsp;Go to:&nbsp;
            <a
              className="custom-a"
              href="https://www.interpolis.nl/service/zorg/persoonlijke-hulp-bij-regelen-van-zorg"
            >
              link&nbsp;
            </a>
          </p>
          <p>
            Menzis (including Menzis, Anderzorg, HEMA and VinkVink)?&nbsp;Go
            to:&nbsp;
            <a
              className="custom-a"
              href="https://www.menzis.nl/zorg-en-vergoedingen/wachtlijstbemiddeling"
            >
              link
            </a>
          </p>
          <p>
            <strong>
              Uncontracted Care (You will receive an invoice from us which you
              can then claim from your health insurer):
            </strong>
            <br />
            CZ (also covered by OHRA, Just and NN)
            <br />
            Care and security
          </p>
          <p>
            NB: Patients must take into account the deductible (€385 in
            2023).&nbsp;
          </p>
          <p>
            A valid referral is required for insured care.&nbsp;We prefer to
            receive referrals via healthcare domain.&nbsp;The referral letter
            must contain the following information:
          </p>
          <p>
            1. Referral date
            <br />
            2. Referrer details: Name, position, address details, AGB code and
            signature.
            <br />
            3. Patient details: Name, address details, date of birth, citizen
            service number (or registration number).
            <br />
            4. Reason for referral: Suspicion of a DSM-5 designated disorder.
            <br />
            5. Reference is made to General Basic/Specialist Mental Health
            Care.&nbsp;
          </p>
        </>
      </div>
    </div>
  );
};

export default page;
