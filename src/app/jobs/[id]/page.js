"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Heder from "../../components/about/Heder";
import ScrollToTop from "../../components/scrolling/ScrollToTop";
import "@/app/page.module.css";
import "@/app/booking.css";
import "@/app/embala.css";
import "@/app/globals.css";
import "@/app/IdealBankSectionStyles.css";
import "@/app/responsive.css";
import "@/app/styles.css";

const Page = ({ params }) => {
  const [job, setJob] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}api/jobs/${params.id}`
        );
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Heder title={"Career"} image={"carHeader"} />
      <ScrollToTop />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            {job.image && (
              <div
                className="rounded-4"
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                <Image
                  width={100}
                  height={100}
                  src={job.image}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  alt="jobs"
                />
              </div>
            )}
          </div>
          <div className="col-md-8">
            <h1 className="fw-bold">{job.title}</h1>
            <hr />
            <div className="row mb-3">
              <div className="col-6 col-lg-4">
                <strong>Category</strong>
                <div>{job.category}</div>
              </div>
              <div className="col-6 col-lg-4">
                <strong>Vacancies</strong>
                <div>{job.vacancy}</div>
              </div>
              <div className="col-6 col-lg-4">
                <strong>Apply before</strong>
                <div>
                  {job.endDate
                    ? new Date(job.endDate).toLocaleDateString()
                    : null}
                </div>
              </div>
            </div>
            <h3>Description</h3>
            <p>{job.description}</p>
            <h3>Requirements</h3>
            <p>{job.requirement}</p>
            <Link href="/apply">
              <button className="btn btn-dark">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
