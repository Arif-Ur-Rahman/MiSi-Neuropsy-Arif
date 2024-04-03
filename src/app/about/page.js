import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Heder from "../components/about/Heder";
import ScrollToTop from "../components/scrolling/ScrollToTop";
import "@/app/referrers/referrers.css";
import ZorgkaartNL from "@../../../public/images/ZorgkaartNL.png";
import CouncilForm from "../components/about/CouncilForm";
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Heder />
      <ScrollToTop />
      <div className="container pt-4">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2 active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Our Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="council-tab"
              data-bs-toggle="tab"
              data-bs-target="#council"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Client council
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Our Method
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Collaborate
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="h3 nav-link rounded-2"
              id="settings-tab"
              data-bs-toggle="tab"
              data-bs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Valuation
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane testUp active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="container text editable-text left py-3">
              <h2>Over MiSi NeuroPsy</h2>
              <p>
                MiSi Neuropsy is characterized by the immediate delivery of
                high-quality care. This is reflected in the very short waiting
                list, where a team with the best practitioners and researchers
                is immediately ready for you.
              </p>
              <p>
                {" "}
                For example, at MiSi NeuroPsy (in the background) doctors,
                professors (Erasmus University) and strategic advisors (Nyenrode
                University) are involved in helping to do better justice to the
                promise of MiSi NeuroPsy. Those who preceded you leave scores of
                around 9!
              </p>
              <h3> Our mission</h3>
              <p>
                {" "}
                Providing accessible, high-quality care (diagnostics and
                treatment) in which the patient is central, and with an eye for
                the diversity in the patient&apos;s background (linguistic,
                psychosocial and cultural background). Our mission for your care
                because everyone deserves the best care and attention.
              </p>
              <ul>
                <li> Accessible and direct access to mental health care</li>
                <li>
                  {" "}
                  High-quality (neuro) psychological diagnostics and treatment
                  of multiple psychological problems
                </li>
                <li> Care for youth, adolescents, adults and the elderly</li>
                <li>
                  {" "}
                  Short-term care where possible and long-term care where
                  necessary
                </li>
                <li> The right quality and frequency quickly determined</li>
                <li>
                  {" "}
                  Always paying attention to social and societal recovery
                </li>
                <li> Working on agreements to prevent relapses</li>
                <li>
                  {" "}
                  Warm handshake transfers to partners in the region when we
                  refer you
                </li>
              </ul>
              <p> You can download our brochure via the button below.</p>
              <p>
                <a
                  href="/uploads/21/Informatiefolder%20MiSi%20NeuroPsy%281%29.pdf"
                  className="btn btn-dark btn-sm"
                >
                  Download the brochure here
                </a>
              </p>
              <h3> Recognized institution</h3>
              <p>
                {" "}
                MiSi Neuropsy is recognized as an institution in the register
                &apos;General Data Management Healthcare Providers&apos; (AGB:
                22227546). In this way we are recognizable to all Dutch health
                insurers as an institution for mental health care. MiSi NeuroPsy
                is also legally recognized as permitted under the Healthcare
                Institutions Permission Act (WTZI).
              </p>
              <h3> Quality management system</h3>
              <p>
                {" "}
                The quality system used by MiSi NeuroPsy and its application
                meet the standard requirements of the HKZ Small Organizations
                certification scheme, version 2010 for the scope: Psychological
                and psychiatric assistance and the provision of care and
                services in the field of mental health care. For more
                information about the quality management system, click here.
              </p>
              <h3> Quality mark Basic GGZ 2020</h3>
              <p>
                {" "}
                As of January 1, 2020, MiSi NeuroPsy carries the Basic GGZ
                Quality Mark. MiSi NeuroPsy shows that they consider quality to
                be of paramount importance and with this quality mark they are a
                forerunner in Basic GGZ. MiSi NeuroPsy intends to maintain this
                quality mark by constantly setting high standards for the
                quality of care and taking that quality one step further.
              </p>
              <h3> Quality statute</h3>
              <p>
                {" "}
                As of August 2017, MiSi NeuroPsy has an approved quality status
                in accordance with the applicable standard (download for
                inspection).
              </p>
              <p>
                <a
                  href="/uploads/21/Kwaliteitsstatuut%202019.pdf"
                  rel="noopener"
                  className="btn btn-sm btn-dark"
                >
                  Download the Misi NeuroPsy quality statute
                </a>
              </p>
              <p>
                <br /> The quality statute provides information about how a
                treatment is structured, which care is provided, the steps
                (phases) from registration to completion, which you can
                influence yourself and which determines together with you what
                the diagnosis and treatment will look like (together decide).
                You can also read which partners we work with and how your loved
                ones can be involved.
              </p>
              <p>
                <a
                  href="/uploads/21/Meldcode%20MiSi%202019.pdf"
                  className="btn btn-sm btn-dark"
                >
                  Download the reporting code Misi NeuroPsy
                </a>
              </p>
              <p>
                <br /> The reporting code describes how MiSi NeuroPsy deals with
                reporting domestic violence, child abuse, sexual violence,
                honor-related violence, stalking and elder abuse.
              </p>
              <p>
                {" "}
                Download information and terms and conditions MiSi NeuroPsy
              </p>
              <p>
                <a
                  href="/uploads/21/Informatie%20en%20algemene%20voorwaarden%2025012019%281%29.pdf"
                  rel="noopener"
                  className="btn btn-sm btn-dark"
                >
                  Download information and terms and conditions Misi NeuroPsy
                </a>
              </p>
              <p>
                {" "}
                These general terms and conditions have been established in
                consultation between the consumer association, the Netherlands
                Patient Federation and the Landelijk Platform GGz and apply to
                the treatment agreement concluded between the patient and the
                healthcare institution.
              </p>
              <p>
                <a
                  href="/uploads/21/Privacy%20beleid%202019.pdf"
                  className="btn btn-sm btn-dark"
                >
                  Download the Misi NeuroPsy Privacy Policy
                </a>
              </p>
              <p>
                <br /> This document describes how MiSi NeuroPsy handles your
                privacy. Privacy mainly means that your data is treated
                confidentially and that a leak (eg data leak) is prevented.
              </p>
              <p>
                <a
                  href="/uploads/21/Algemene-leveringsvoorwaarden-ggz.pdf"
                  rel="noopener"
                  className="btn btn-sm btn-dark"
                >
                  Download general terms and conditions of delivery and mental
                  health care
                </a>
              </p>
              <p>
                <br /> This document explains the procedure for MiSi NeuroPsy,
                it concerns information on the following subjects:
              </p>
              <ul>
                <li>
                  {" "}
                  Method within MiSi NeuroPsy (intake phase, treatment plan,
                  evaluation and involvement of social environment such as
                  family, relatives or other practitioners)
                </li>
                <li> Reimbursed care and deductible</li>
                <li> Appointment cannot take place</li>
                <li>
                  {" "}
                  Access to your file privacy legislation and information
                  security
                </li>
                <li> Complaints procedure</li>
                <li> What to do in case of crisis</li>
              </ul>
              <h3> Contact</h3>
              <p>
                {" "}
                Do you have questions about MiSi NeuroPsy or would you like to
                make an appointment? Fill in our contact form or reach us by
                phone or email.
              </p>
              <Link href="/contact">
                <p className="btn btn-sm btn-dark">Contact</p>
              </Link>
            </div>
          </div>
          <div
            className="tab-pane testUp py-4"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="container text editable-text left">
              <h2>Treatment at MiSi NeuroPsy</h2>{" "}
              <p>
                A treatment at MiSi NeuroPsy is built up in different phases. We
                start with the registration. Then there will be an intake
                interview and hopefully we will jointly arrive at a treatment
                plan. Then we will start working on your treatment plan. In the
                meantime, we regularly check whether we are still on the right
                track and work towards completion.
              </p>
              <h3> Quality standards</h3>
              <p>
                {" "}
                MiSi NeuroPsy works according to the latest scientific standards
                for the applicable professional groups. To guarantee this, MiSi
                employs researchers who have a PhD who monitor the scientific
                standards of MiSi NeuroPsy on a weekly basis and supplement them
                where necessary. For example, the internal library is currently
                being supplemented with a lot of information about
                screen-to-screen and telephone treatment. During the treatment,
                those involved will work with you and think about tailoring the
                treatment as much as possible.
              </p>
              <h3> Registration</h3>
              <p>
                {" "}
                Your registration (via the doctor or our website) is received by
                the registration team who checks and processes it daily. After
                this, your referral will be discussed and assessed within the
                assessment staff. This may result in 1) that you can immediately
                get an intake appointment, 2) that we call you and / or your
                referrer for other information or 3) that we inform you and / or
                your referrer that we are not the right healthcare provider for
                you. Even if the care may not be reimbursed by your health
                insurer, the registration team will indicate this and examine
                the options with you.
              </p>
              <p>
                {" "}
                If you are eligible for an intake appointment, the application
                team will contact you within 1 - 3 days to schedule an
                appointment in the same or the following week. You will then be
                sent a questionnaire to map out your complaints, which will be
                discussed with you during the intake interview.
              </p>
              <h3> Intake and diagnosis</h3>
              <p>
                {" "}
                The intake is the first meeting you have with a practitioner.
                During this meeting we discuss what your complaints are and what
                your request for help is. Questionnaires are also used for this.
                This is followed by a treatment plan meeting. This conversation
                may be during your first appointment but more often during your
                second appointment. The practitioner will discuss the diagnosis
                and the treatment options with you. Together with the
                practitioner you choose the form of treatment that suits you
                best. You draw up the treatment plan together with the
                practitioner. At the end of the intake phase, the treatment plan
                is always put in your electronic patient file in agreement with
                you.
              </p>
              <p>
                {" "}
                If the intake shows that you need other care, the practitioner
                will discuss the next steps with you. It may also be that
                further diagnostics are required. MiSi NeuroPsy also has its own
                diagnostics team.
              </p>
              <p>
                {" "}
                It may happen that after the first consultation our care does
                not suit you or that there is no &apos;click&apos; with the
                practitioner. If it turns out that the treatment offer is not
                appropriate, we will work with you to determine where the best
                care can be provided by our chain partners.
              </p>
              <p>
                {" "}
                A good match with the practitioner is very important. At the end
                of the intake phase, the practitioner will ask you whether the
                match is a good one to start the treatment. If there is no click
                with the practitioner, it will be checked whether another
                practitioner from MiSi NeuroPsy is a better match.
              </p>
              <h3> Treatment plan and treatment</h3>
              <p>
                {" "}
                A BGGZ treatment consists of 3 to 12 sessions, depending on the
                severity and complexity of your complaints. SGGZ treatment can
                consist of up to 30 sessions. The shortest process is one month,
                the most common process is three months and if necessary your
                process can take a year. Your sessions will be weekly, unless
                otherwise agreed in exceptional cases (once every 2 or 4 weeks).
              </p>
              <p>
                {" "}
                In the second meeting we look back at the intake and discuss the
                treatment plan. The treatment plan contains the goals we are
                going to work on and how we are going to do this. The
                practitioner carries out the treatment according to the MiSi
                NeuroPsy treatment plan and care pathways. During the treatment
                you will receive information and assignments that you can use at
                home. MiSi NeuroPsy also uses eHealth modules where you can, for
                example, keep records and diaries, do homework assignments and
                read information in peace. This allows you to continue to work
                on your treatment goals at home.
              </p>
              <h3> Involved environment</h3>
              <p>
                {" "}
                It is possible to bring a loved one (family, friend) to a
                conversation. Indicate this to your practitioner in advance. You
                can also share all information and your progress with others via
                eHealth.
              </p>
              <h3> Evaluation moments</h3>
              <p>
                {" "}
                We regularly check how things are going. Are we satisfied with
                the progress? Does the treatment still meet your expectations?
              </p>
              <p>
                {" "}
                In any case, at every appointment there are moments when we look
                back and forward with you at the difference in your health.
                These interim evaluations also consider whether the treatment
                needs to be adjusted. At the end of your treatment process, we
                look at your health and you are also asked about your
                satisfaction with the treatment.
              </p>
              <h3> Closure and aftercare</h3>
              <p>
                {" "}
                Your treatment will last as long as necessary and no longer than
                necessary. It is discussed in advance how long the process will
                take according to our estimate. This can be anywhere from three
                to thirty sessions, or a month to twelve months. We will adjust
                this if necessary. We do this during the evaluations.
              </p>
              <p>
                {" "}
                In the treatment at MiSi NeuroPsy, we always work on
                appointments to prevent a relapse. That is why our treatment
                focus is not only towards clinical recovery but also to empower
                you personally, socially and socially. To achieve this, we
                therefore work multi-systemically wherever possible. For
                example, by involving the social support system and if it is not
                available, expand it. But we also work with flash cards, which
                you can fall back on if you just don&apos;t remember. That way
                you can get to work yourself if things don&apos;t go well in the
                future.
              </p>
              <h3> Treatment methods</h3>
              <p>
                {" "}
                The most common forms of treatment that our therapists can offer
                are:
              </p>
              <h3> CBT</h3>
              <p>
                {" "}
                Cognitive Behavioral Therapy (CBT) is a combination of cognitive
                therapy and behavioral therapy. In cognitive therapy, the
                emphasis is mainly on changing the way you think and interpret.
                Behavioral therapy mainly focuses on changing behavioral
                patterns (which maintain the problems and complaints). The aim
                of this therapy is to learn helpful thinking patterns and thus
                helpful behavioral patterns. We assume that if people change
                their way of thinking and / or acting, then how they feel will
                also change.
              </p>
              <h3> MBCT</h3>
              <p>
                {" "}
                Attention-oriented cognitive therapy (MBCT) combines meditation
                techniques with cognitive behavioral therapy. During this
                therapy you learn to allow both positive and negative emotions
                and thoughts and to accept them for what they are. Furthermore,
                attention is paid to dwelling more on the experience in the here
                and now without judging it.
              </p>
              <h3> IPT</h3>
              <p>
                {" "}
                Interpersonal psychotherapy (IPT) is a short-term and supportive
                talk therapy designed for the treatment of depressive symptoms.
                The goal of this therapy is to find a (quick) solution to the
                problems someone encounters. These problems are always related
                to recent changes in relationships with (significant) others.
                During the therapy, attention is therefore paid to improving
                relationships with others.
              </p>
              <h3> EMDR</h3>
              <p>
                {" "}
                Eye Movement Desensitization and Reprocessing (EMDR) is a
                therapy for people who continue to suffer from the consequences
                of a shocking event, such as an accident or violence. Thinking
                about this traumatic event still evokes unpleasant emotions. The
                use of EMDR treatment reduces the intense emotions associated
                with a post-traumatic stress disorder or other trauma-related
                disorders.
              </p>
              <h3> Schema therapy</h3>
              <p>
                {" "}
                Schema therapy makes it possible to understand and change old
                complicated behavioral patterns. During this therapy, students
                learn to change old behavioral patterns into desired behavior,
                by, among other things, recognizing the old behavior and by
                learning new thoughts.
              </p>
              <h3> MBT</h3>
              <p>
                {" "}
                Mentalization-Based Treatment is a proven effective treatment
                for people with emotion regulation problems, hypersensitivity
                and impulsive behavior. In this therapy, attention is paid to
                learning to perceive and understand their own behavior and the
                behavior of others. In addition, they learn to understand the
                feelings, thoughts and intentions of others.
              </p>
              <h3> ACT</h3>
              <p>
                {" "}
                Acceptance &amp; Commitment therapy is a form of behavioral
                therapy that teaches how to make room for unpleasant emotions
                (acceptance). In addition, during this form of therapy,
                attention is also paid to distance yourself from negative
                thoughts in a healthy way and to live more in the here and now.
              </p>
              <h3> System therapy</h3>
              <p>
                {" "}
                In system therapy we assume that the social, relational and
                cultural context always plays a role in the complaints. The most
                important feature of this form of therapy is that important
                loved ones such as the partner, children, brother, sister,
                parents, neighbors, friends or colleagues are involved in the
                therapy. The parties involved are working to map out the mutual
                interaction patterns and to work towards improving them.
              </p>
              <h3> DGT</h3>
              <p>
                {" "}
                Dialectical behavioral therapy (DBT) focuses on learning to get
                a grip on strong emotions, such as sadness, sadness, anger and
                fear or a change of emotions. During therapy, attention is paid
                to examining these (strong) emotions, understanding them and
                learning to deal with them better.
              </p>
              <h3> EFT</h3>
              <p>
                {" "}
                Emotion-oriented therapy focuses on understanding, experiencing
                and changing emotions. Furthermore, the focus is also on
                becoming aware of underlying emotions and giving them new
                meanings, making behavioral changes possible.
              </p>
              <h3> PDT</h3>
              <p>
                {" "}
                With psychodynamic therapy (PDT) it is possible to gain more
                insight into yourself. During this therapy, attention is paid to
                unconscious thoughts and feelings (for example memories from
                early childhood) that can no longer be consciously remembered,
                but do influence current feelings and behavior.
                <br /> The treatments at MiSi NeuroPsy can be given in Dutch,
                English, Spanish, Russian, Farsi, Dari, Moroccan (Berber and
                Arabic), classical Arabic, Somali, Modern Hindi and Punjabi.
              </p>
              <h3> E-health</h3>
              <p>
                {" "}
                To support the treatment, MiSi NeuroPsy also uses the following
                eHealth support (via Embloom, NiceDay and Therapieland):
              </p>
              <ul>
                <li> Questionnaires (Dutch and English)</li>
                <li>
                  {" "}
                  Psychoeducation in the form of treatment: eg digital care,
                  introduction to ACT, introduction to CBT, introduction to
                  Schema therapy, etc.
                </li>
                <li>
                  {" "}
                  Psychoeducation in case of a complaint: e.g. anxiety
                  complaints, assertiveness problems, worrying, dealing with
                  stress, grief, etc.
                </li>
                <li>
                  {" "}
                  Psychoeducation in the case of a disorder: e.g. depressive
                  disorder, generalized anxiety disorder, post-traumatic stress
                  disorder, general personality disorder, etc.
                </li>
                <li>
                  {" "}
                  Exercises with eg CBT, ACT, Mindfulness, Schema therapy,
                  Positive psychology, exposure, etc.
                </li>
                <li>
                  {" "}
                  Diaries: e.g. activity diary, anxiety diary, worry diary, etc.
                </li>
                <li>
                  {" "}
                  Self-help modules from Mirro foundation: e.g. fear &amp;
                  panic, money worries, less worrying, bereavement etc.
                </li>
                <li>
                  {" "}
                  Treatment modules: eg ACT, Depression, Generalized Anxiety
                  Disorder, Panic, Sleep etc.
                </li>
              </ul>
              <p>
                {" "}
                We offer various tools, videos and links about psycho-education,
                EMDR and behavioral patterns, among other things.
              </p>
            </div>
          </div>
          <div
            className="tab-pane testUp py-4"
            id="council"
            role="tabpanel"
            aria-labelledby="council-tab"
          >
            <div className="container text editable-text left">
              <div className="row text70">
                <div className="col-70">
                  <div className="container text editable-text left">
                    <h2>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Client Council
                        </font>
                      </font>
                    </h2>{" "}
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          MiSi NeuroPsy has a client council.
                        </font>
                      </font>
                    </p>{" "}
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Participation in the client council: MiSi NeuroPsy
                          Rotterdam Center attaches great importance to good
                          quality psychological care and would like the
                          psychological care to be well organized for you.{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          We value your opinion about our care.
                        </font>
                      </font>
                    </p>{" "}
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          By participating in the client council you think about
                          important matters that concern you or your therapy.{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          In this context, you provide advice to the management
                          on a number of matters.{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          You can participate as a (former) client, or as a
                          close relative of a (former) client.
                        </font>
                      </font>
                    </p>{" "}
                    <h3>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Would you like to participate in the client council?{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          Leave your details here:
                        </font>
                      </font>
                    </h3>{" "}
                    <div className="mceNonEditable">
                      <CouncilForm />
                    </div>
                    <h3>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Let us know your opinion
                        </font>
                      </font>
                    </h3>
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Your opinion counts.{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          Via Zorgkaart you can place your appreciation about
                          MiSi NeuroSpy.
                        </font>
                      </font>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        href="https://www.zorgkaartnederland.nl/zorginstelling/psychologiepraktijk-en-psychotherapiepraktijk-misi-neuropsy-oegstgeest-10000070/waardeer"
                        rel="noreferrer"
                        className="btn btn-sm btn-dark"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Appreciate Misi Neuropsy
                          </font>
                        </font>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane testUp py-4"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <div className="container text editable-text left">
              {/* <h2>Collaborate</h2>{" "}
              <p>
                Basic GGZ and Specialized GGZ
                <br /> MiSi NeuroPsy can provide basic mental health care
                short-term treatment and / or diagnostics as possible for mild
                or moderate psychological problems. However, if the complaints
                require longer care, it will be determined whether you are
                eligible for specialized mental health care (upscaling). For the
                SGGZ we offer diagnostics and treatment mainly in the field of
                trauma and personality problems, neurocognitive function and
                development disorders and mood problems (uni- and bipolar). The
                remainder is referred to specialized institutions in the region.
              </p>
              <p>
                {" "}
                If the care offered at MiSi NeuroPsy is not sufficient or
                appropriate, you will receive appropriate care advice to go into
                care elsewhere, with you until the care is taken over /
                initiated elsewhere (warm transfer). This coordination can be
                found in the file.
              </p>
              <h3> Collaboration with other (healthcare) professionals</h3>
              <p>
                {" "}
                With our knowledge and cooperation partners, we can support you
                in addition to your mental health, also with your physical
                health, your social contacts and your possible daytime
                activities.
              </p>
              <h3>
                {" "}
                Referrer: general practitioners, street doctors and medical
                specialists
              </h3>
              <p>
                {" "}
                MiSi NeuroPsy works together with GP practices, psychologists
                who, as POH-GGZ, are involved in referrals from GP practices,
                street doctors and medical specialists from hospitals. It is
                about referrals and information exchange about the treatment.
                Discuss whether information is being exchanged about your
                treatment. The referring doctor will be informed by the
                practitioner by letter at the following moments:
              </p>
              <ul>
                <li>
                  {" "}
                  After the intake about the diagnosis and intended treatment
                  During the treatment if there was a reason to change the
                  treatment plan
                </li>
                <li>
                  {" "}
                  After the treatment to provide feedback on the course and
                  outcome of the treatment.
                  <br /> Other cooperation partners
                </li>
                <li>
                  {" "}
                  Within MiSi NeuroPsy PhD researchers who have proven
                  themselves competent in intercultural, medical psychology and
                  neuropsychological care with a focus on short-term treatment
                  work where possible and long-term necessary. MiSi NeuroPsy is
                  well known regionally and is regularly in demand for teaching
                  programs, refresher courses and continuous supervision of
                  chain partners.
                </li>
              </ul>
              <p>
                {" "}
                For example, MiSi NeuroPsy annually provides external
                supervision to basic psychologists, mental health psychologists
                in training and psychotherapists in training. In addition, MiSi
                NeuroPsy annually contributes to training courses in the field
                of intercultural communication for doctors, nurses,
                psychologists and POH students in training. MiSi employees do
                this by providing lectures and training at the University of
                Rotterdam, Amsterdam and Tilburg and the Hogeschool van
                Rotterdam. In addition, MiSi provides intercultural
                communication training eight times a year to healthcare
                professionals (usually doctors and nurses) in hospitals in the
                Rijnmond and West Brabant region.
              </p>
              <h3> Retrieving knowledge</h3>
              <p>
                {" "}
                MiSi NeuroPsy works according to the latest scientific standards
                for the applicable professional groups. To guarantee this, MiSi
                employs researchers who have a PhD who monitor the scientific
                standards of MiSi NeuroPsy on a weekly basis and supplement them
                where necessary. For example, the internal library is currently
                being supplemented with a lot of information about
                screen-to-screen and telephone treatment. During the treatment,
                those involved will work with you and think about tailoring the
                treatment as much as possible.
              </p>
              <h3> Sharing knowledge</h3>
              <p>
                {" "}
                Within MiSi NeuroPsy PhD researchers who have proven themselves
                competent in intercultural, medical psychology and
                neuropsychological care with a focus on short-term treatment
                work where possible and long-term necessary. MiSi NeuroPsy is
                known regionally and is regularly requested in teaching
                programs, refresher courses and continuous supervision of chain
                partners. For example, MiSi NeuroPsy annually provides external
                supervision to basic psychologists, mental health psychologists
                in training and psychotherapists in training. In addition, MiSi
                NeuroPsy annually contributes to training courses in the field
                of intercultural communication for doctors, nurses,
                psychologists and POH students in training. MiSi employees do
                this by providing lectures and training at the University of
                Rotterdam, Amsterdam and Tilburg and the Hogeschool van
                Rotterdam. MiSi also provides intercultural communication
                training eight times a year to healthcare professionals (mostly
                doctors and nurses) in hospitals in the Rijnmond and West
                Brabant region.
              </p>
              <h3> Contact</h3>
              <p>
                {" "}
                Do you have questions about our working method, treatments or
                would you like to make an appointment? Please do not hesitate to{" "}
                <Link href="/contact">contact</Link> us. To sign up with MiSi
                NeuroPsy, please go <a href="/aanmelden">here</a> .
              </p>
              <Link href="/contact" className="btn btn-sm btn-dark">
                <p className="btn btn-sm btn-dark">Contact</p>
              </Link> */}
              <>
                <h2>To collaborate</h2>
                <p>
                  Basic GGZ and Specialized GGZ
                  <br />
                  You can go to MiSi NeuroPsy for basic GGZ, short-term
                  treatment and/or diagnostics, possibly for mild or moderate
                  psychological problems.&nbsp;However, if the complaints
                  require longer care, it will be examined whether you are
                  eligible for specialized mental health care
                  (upscaling).&nbsp;For the SGGZ we offer diagnostics and
                  treatment mainly in the field of trauma and personality
                  problems, neurocognitive function and developmental disorders
                  and mood problems (unipolar and bipolar).&nbsp;The rest are
                  referred to specialized institutions in the region.&nbsp;
                </p>
                <p>
                  If the care offered by MiSi NeuroPsy is not sufficient or
                  appropriate, you will receive appropriate care advice to seek
                  care elsewhere, where you will be accompanied until the care
                  has been taken over/initiated elsewhere (warm
                  transfer).&nbsp;This coordination can be found in the file.
                </p>
                <h3>Collaboration with other (care) professionals</h3>
                <p>
                  With our knowledge and cooperation partners, we can support
                  you in addition to your mental health, also with your physical
                  health, your social contacts and any daytime activities.&nbsp;
                </p>
                <h3>
                  Referrer: general practitioners, street doctors and medical
                  specialists
                </h3>
                <p>
                  MiSi NeuroPsy works together with general practices,
                  psychologists who are involved in referrals from general
                  practices as POH-GGZ, street doctors and medical specialists
                  from hospitals.&nbsp;This concerns referrals and information
                  exchange about the treatment.&nbsp;Consultation or information
                  exchange about your treatment takes place.&nbsp;The referrer
                  will be informed by the practitioner by letter at the
                  following times:
                </p>
                <ul>
                  <li>
                    After the intake about the diagnosis and intended treatment.
                    During the treatment if there has been a reason to change
                    the treatment plan
                  </li>
                  <li>
                    After the end of the treatment to provide feedback on the
                    course and result of the treatment.&nbsp;
                  </li>
                </ul>
                <h3>Other cooperation partners</h3>
                <p>
                  Within MiSi NeuroPsy, researchers with a PhD who have proven
                  themselves competent in intercultural, medical psychology and
                  neuropsychological care work with a focus on short-term
                  treatment where possible and long-term where
                  necessary.&nbsp;MiSi NeuroPsy is well known regionally and is
                  regularly requested for teaching programs, refresher courses
                  and continuous supervision of chain partners.
                </p>
                <p>
                  For example, MiSi NeuroPsy provides annual external
                  supervision to basic psychologists, Gz psychologists in
                  training and psychotherapists in training.&nbsp;In addition,
                  MiSi NeuroPsy contributes annually to training courses in the
                  field of intercultural communication for doctors, nurses,
                  psychologists and nurse practitioners in training.&nbsp;MiSi
                  employees do this by providing lectures and training at the
                  University of Rotterdam, Amsterdam and Tilburg and the
                  Rotterdam University of Applied Sciences.&nbsp;In addition,
                  MiSi provides intercultural communication training eight times
                  a year to healthcare professionals (mostly doctors and nurses)
                  in hospitals in the Rijnmond and West Brabant region.
                </p>
                <h3>Retrieving knowledge</h3>
                <p>
                  Within MiSi NeuroPsy we work according to the latest
                  scientific standards for the applicable professional
                  groups.&nbsp;To ensure this, MiSi employs researchers with a
                  PhD who weekly monitor the scientific standards of MiSi
                  NeuroPsy and supplement them where necessary.&nbsp;For
                  example, the internal library is currently being supplemented
                  with a great deal of information about screen-to-screen and
                  telephone treatment.&nbsp;During the treatment, those involved
                  will cooperate with you and try to tailor the treatment as
                  much as possible.
                </p>
                <h3>Sharing knowledge</h3>
                <p>
                  Within MiSi NeuroPsy, researchers with a PhD who have proven
                  themselves competent in intercultural, medical psychology and
                  neuropsychological care work with a focus on short-term
                  treatment where possible and long-term where
                  necessary.&nbsp;MiSi NeuroPsy is known regionally and is
                  regularly requested for teaching programs, refresher courses
                  and continuous supervision of chain partners.&nbsp;For
                  example, MiSi NeuroPsy provides annual external supervision to
                  basic psychologists, Gz psychologists in training and
                  psychotherapists in training.&nbsp;In addition, MiSi NeuroPsy
                  contributes annually to training courses in the field of
                  intercultural communication for doctors, nurses, psychologists
                  and nurse practitioners in training.&nbsp;MiSi employees do
                  this by providing lectures and training at the University of
                  Rotterdam, Amsterdam and Tilburg and the Rotterdam University
                  of Applied Sciences.
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.misineuropsy.nl/uploads/21/Online%20Zorg%20MiSi%20NeuroPsy.pdf"
                    rel="noreferrer"
                    className="btn btn-sm btn-dark"
                  >
                    VIEW FOLDER
                  </a>
                </p>
                <h3>
                  Campaign MARIO screening study of Sophia Children&apos;s
                  Hospital
                </h3>
                <p>
                  Are you between 10 and 25 years old and do you have a parent
                  with psychological problems?&nbsp;Participate in the MARIO
                  screening study.&nbsp;Participation takes 30 minutes.
                  <br />
                  Sign up via &nbsp;
                  <a
                    className="custom-a"
                    href="https://www.misineuropsy.nl/Mario-project.nl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mario-project.nl
                  </a>
                </p>
                <p>
                  <iframe
                    width={560}
                    height={314}
                    src="https://www.youtube.com/embed/e_Mf-aIjqhk"
                    allowFullScreen="allowfullscreen"
                  />
                </p>
                <p>
                  <strong>
                    <br />
                    Lea Jabbarian: You can learn and continue to develop
                    intercultural communication
                    <br />
                  </strong>
                  <br />
                  You can read this interview via the following link:&nbsp;
                  <a
                    className="custom-a"
                    href="https://idemrotterdam.nl/lea-jabbarian-interculturele-communicatie-kun-je-leren-en-blijven-ontwikkelen/"
                  >
                    https://idemrotterdam.nl/lea-jabbarian-interculturele-communicatie-kun-je-leren-en-blijven-ontontwikkeling
                    /
                  </a>
                  <br />
                  <br />
                  <strong>Donation to the Erasmus MC Foundation</strong>
                </p>
                <p>
                  We support important vascular dementia research at Erasmus
                  MC.&nbsp;
                </p>
                <p>
                  Vascular dementia is a form of dementia that is very common,
                  especially in old age.&nbsp;This form of dementia is caused by
                  problems in the blood circulation in the brain (vascular
                  damage).&nbsp;There is currently no treatment that can cure
                  vascular dementia.&nbsp;However, doctors can treat the causes
                  of vascular damage.&nbsp;This treatment may slow the
                  progression of vascular dementia.&nbsp;Therefore, recognizing
                  vascular damage in patients with memory complaints or dementia
                  is important for proper diagnosis and treatment.&nbsp;
                </p>
                <h3>Contact</h3>
                <p>
                  Do you have questions about our working method, treatments or
                  do you want to make an appointment?&nbsp;Please feel free
                  &nbsp;
                  <a
                    className="custom-a"
                    href="https://www.misineuropsy.nl/contact"
                  >
                    to contact
                  </a>
                  &nbsp; us.&nbsp;To register with MiSi NeuroPsy you can
                  &nbsp;go&nbsp;
                  <a
                    className="custom-a"
                    href="https://www.misineuropsy.nl/aanmelden"
                  >
                    here
                  </a>
                  &nbsp; .
                </p>
                <Link href="/contact">
                  <p className="btn btn-sm btn-dark">CONTACT</p>
                </Link>
              </>
            </div>
          </div>
          <div
            className="tab-pane testUp py-4"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="container text editable-text left">
              <>
                <h2>Valuation</h2>
                <p>
                  We would like to hear how you experienced our core promise,
                  which is to provide the best possible care.&nbsp;Another core
                  promise is that we focus on you and your environment during
                  the care process.&nbsp;We measure how well we provide our care
                  through your answers to satisfaction questions.
                </p>
                <p>
                  This data is analyzed and discussed within the team every
                  month.&nbsp;Where necessary, we will make adjustments to get
                  closer to your wishes.&nbsp;Continuously measuring the quality
                  of our care is extremely important to us.&nbsp;Our aim is to
                  achieve a 100% score every time;&nbsp;to organize and deliver
                  the care 100% according to your wishes.&nbsp;Our focus from
                  this view is to maximize your control in the treatment goals.
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.zorgkaartnederland.nl/zorginstelling/psychologiepraktijk-en-psychotherapiepraktijk-misi-neuropsy-oegstgeest-10000070/waardeer"
                    rel="noreferrer"
                    className="btn btn-sm btn-dark"
                  >
                    APPRECIATE MISI NEUROPSY
                  </a>
                </p>
                <h3>Care card report grade</h3>
                <p>
                  Below is our average report mark per year via Zorgkaart
                  Nederland.
                </p>
                <p>
                  <em>Ratings</em>
                </p>
                <p>
                  <strong>2022 – 8.4</strong>
                </p>
                <p>
                  2019 – 9.7
                  <br />
                  2020 – 9.6
                  <br />
                  2021 – 9.1
                </p>
                <p>
                  For more information about Zorgkaart Nederland and the
                  evaluations, click here.
                </p>
                <h3>
                  <Image src={ZorgkaartNL} alt="" width={184} height={58} />
                  <br />
                  &nbsp;
                  <br />
                  CQ index
                </h3>
                <p>
                  MiSi NeuroPsy considers it important to ask the caretaker a
                  number of concrete factors with regard to the treatment
                  immediately after treatment;&nbsp;Consumer quality index
                  Ambulatory care (CQ).&nbsp;The CQ index has been developed to
                  inventory experiences with outpatient mental health care.
                </p>
                <p>With the scales below we mean the following:</p>
                <ul>
                  <li>treatment;&nbsp;how have we treated you.</li>
                  <li>
                    Decide together;&nbsp;how much space did you have to think
                    and decide.
                  </li>
                  <li>
                    Execution of treatment;&nbsp;your care has been carried out
                    satisfactorily.
                  </li>
                  <li>
                    Report mark;&nbsp;what figure do you give to the care
                    provided.
                  </li>
                </ul>
                <p>
                  <em>Treatment (score on scale 1 – 5) &nbsp; &nbsp; &nbsp;</em>
                </p>
                <p>
                  <strong>2022 – 4.78</strong>
                </p>
                <p>
                  2019 – 4.75
                  <br />
                  2020 – 4.78
                  <br />
                  2021 – 4.84
                </p>
                <p>
                  <em>
                    Deciding together (score on scale 1 – 5) &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;
                  </em>
                </p>
                <p>
                  <strong>2022 – 4.51</strong>
                </p>
                <p>
                  2019 – 4.00
                  <br />
                  2020 – 4.10
                  <br />
                  2021 – 4.58
                </p>
                <p>
                  <em>Execution of treatment (score on scale 1 – 5)</em>
                </p>
                <p>
                  <strong>2022 – 4.26</strong>
                </p>
                <p>
                  2019 – 4.28
                  <br />
                  2020 – 4.36
                  <br />
                  2021 – 4.34
                </p>
                <p>
                  <em>Report mark (score on scale 0-10)</em>
                </p>
                <p>
                  <strong>2022 – 8.36</strong>
                </p>
                <p>
                  2019 – 8.34
                  <br />
                  2020 – 8.41
                  <br />
                  2021 – 8.43
                </p>
                <h3>Complaint procedure</h3>
                <p>
                  The complaints procedure has been documented and established
                  for the year 2023/2024 in accordance with the requirements of
                  the Healthcare Quality, Complaints and Disputes Act
                  (Wkkgz).&nbsp;Patients/clients have the opportunity to express
                  and submit their
                  dissatisfaction/complaints.&nbsp;Patients/clients can of
                  course express their dissatisfaction with the practitioner or
                  coordinating practitioner.&nbsp;In this way, it is easy to
                  mediate and a solution can be sought (possibly with the
                  mediation of the management).
                </p>
                <p>
                  MiSi NeuroPsy is also affiliated with the Healthcare
                  Complaints Desk, which ensures proper, fast and accessible
                  handling of complaints and disputes.&nbsp;The Care Complaints
                  Desk provides MiSi NeuroPsy with advice on how to handle
                  complaints and facilitates an independent complaints
                  officer.&nbsp;MiSi NeuroPsy is also affiliated with an
                  independent complaints committee: &nbsp;
                  <a
                    href="https://www.degeschillencommissiezorg.nl/"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-hb custom-a"
                  >
                    De Geschillencommissie Zorg.
                  </a>
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
