"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/applied-candidates`,
        data
      );
      toast.success("Form submitted successfully");
      reset();
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center" style={{ fontSize: "3rem" }}>
          <div
            className="btn btn-link"
            onClick={() => router.back()}
            style={{ fontSize: "3rem" }}
          >
            {" "}
            <BiLeftArrowAlt />
          </div>
          Vacancies
        </div>
      </div> */}
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "600px" }}
      >
        <div className="col-md-6 border m-3 rounded shadow p-4">
          <h2 className="text-center"> Apply Now </h2>

          <div className="floating-window-body">
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName"
                  placeholder=""
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    },
                  })}
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-danger">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <span className="text-danger">phone number required</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Post name
                </label>
                <input
                  {...register("postName", { required: true })}
                  type="text"
                  className="form-control"
                  placeholder="Post Name"
                />
                {errors.postName && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  CV
                </label>
                <input
                  {...register("cv", { required: true })}
                  type="file"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
                {errors.cv && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Identity Card
                </label>
                <input
                  {...register("idCard", { required: true })}
                  type="file"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
                {errors.idCard && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <button type="submit" className="btn-next btn btn-dark">
                Submit
                <BiRightArrowAlt className="ms-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
