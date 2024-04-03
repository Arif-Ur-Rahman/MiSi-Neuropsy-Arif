"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CouncilForm = () => {
  // const [ClientForm, ClientForm] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/client-council/`,
        data
      );
      toast.success("Form submitted successfully");
      reset();
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="style-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="row form-row">
            <div className="col-100">
              <div id="HgnAOy">
                <div className="el-input-wrap el-text-wrap">
                  <div>
                    <label className="el-input-label">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Name</font>
                      </font>
                    </label>
                  </div>{" "}
                  <div className="el-input">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      autoComplete="off"
                      placeholder=""
                      className="el-input__inner"
                      style={{ width: "100%" }}
                    />
                    {errors.name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-row">
            <div className="col-100">
              <div id="vLXjSZ">
                <div className="el-input-wrap el-text-wrap">
                  <div>
                    <label className="el-input-label">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          phone number
                        </font>
                      </font>
                    </label>
                  </div>
                  <div className="el-input">
                    <input
                      {...register("phone", { required: true })}
                      type="text"
                      autoComplete="off"
                      placeholder=""
                      className="el-input__inner"
                      style={{ width: "100%" }}
                    />
                    {errors.phone && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-row">
            <div className="col-100">
              <div id="npkfjU">
                <div className="el-input-wrap el-textarea-wrap">
                  <div>
                    <label className="el-input-label">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Message
                        </font>
                      </font>
                    </label>
                  </div>{" "}
                  <div className="el-textarea">
                    <textarea
                      {...register("message", { required: true })}
                      autoComplete="off"
                      placeholder=""
                      className="el-textarea__inner"
                      style={{ minHeight: 23, width: "100%" }}
                      defaultValue={""}
                    />
                    {errors.message && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-row">
            <div className="col-100">
              <div>
                <div className="row form-row">
                  <div style={{ width: 304, height: 78 }}>
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lf73UUUAAAAAKndFOOIceD55vzmFORvqPE1W7ny&co=aHR0cHM6Ly93d3cubWlzaW5ldXJvcHN5Lm5sOjQ0Mw..&hl=nl&v=4q6CtudrwcI-LSEYlfoEbDXg&size=normal&cb=upl2lljjzjgo"
                        width={304}
                        height={78}
                        role="presentation"
                        name="a-wmee7z2dolec"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      />
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: 250,
                        height: 40,
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: 0,
                        resize: "none",
                        display: "none",
                      }}
                      defaultValue={""}
                    />
                  </div>
                  <iframe style={{ display: "none" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="row form-row">
            <div className="col-100">
              <button
                type="submit"
                value="submit"
                className="btn btn-sm btn-dark"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Send</font>
                </font>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CouncilForm;
