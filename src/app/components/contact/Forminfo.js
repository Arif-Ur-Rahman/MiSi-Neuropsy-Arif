"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Forminfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/contact-form/`,
        data
      );
      toast.success("Form submitted successfully");
      reset();
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };
  return (
    <section id="form_info">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div
            className="col-md-6  py-5"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="1500"
          >
            <>
              <h2>Contact information</h2>
              <p>
                Do you have any questions or would you like to know what MiSi
                NeuroPsy can do for you?&nbsp;Feel free to contact us, you can
                email or call us.&nbsp;You can also fill in the contact form
                below.
              </p>
              <p>
                <strong>Head office / postal address</strong>
                <br />
                Weena 742 A<br />
                3014 DA Rotterdam
              </p>
              <p>
                <strong>Treat location</strong>
                <br />
                Weena 732, 11th floor.
                <br />
                3014 DA Rotterdam
              </p>
              <p>
                <em>
                  Within walking distance of Rotterdam Central Station (5min)
                  and Stadhuisplein Metro Station (5min).
                </em>
              </p>
              <p>
                <strong>Opening hours</strong>
                <br />
                Every day 08:00-20:00, except Sunday.
                <br />
                <br />
                <strong>Telephone</strong>
                <br />
                +316 2818 3284 (For healthcare-related questions, available
                24/7)
                <br />
                +3110 318 00 88
              </p>
              <p>
                <strong>E-mail</strong>
                <br />
                info@misineuropsy.nl (general)
                <br />
                care@misineuropsy.nl (registration/care questions)
              </p>
            </>
          </div>
          <div
            className="col-md-6 py-5"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="1500"
          >
            <form action="POST" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center">CONTACT</h1>
              <div className="mb-3">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="form-control rounded-0"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    },
                  })}
                  type="text"
                  className="form-control rounded-0"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-danger">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div className="mb-3">
                <input
                  {...register("subject", { required: true })}
                  type="text"
                  className="form-control rounded-0"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  {...register("message", { required: true })}
                  className="form-control rounded-0"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark rounded-0 px-4">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forminfo;
