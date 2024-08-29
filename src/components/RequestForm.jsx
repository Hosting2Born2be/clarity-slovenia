"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

const RequestForm = () => {
  const countryCode = useCountryCode();
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const requestTypes = [
    { value: "Send", label: "Send" },
    { value: "Receive", label: "Receive" },
    { value: "Card", label: "Card" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#0d0d0d",
      height: "50px",
      borderRadius: "25px",
      background: "#ffffff",
      border: state.isFocused ? "1px solid #DCDCDC" : "1px solid #DCDCDC",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 20px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#DCDCDC",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#0d0d0d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0d0d0d",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "8px",
        height: "8px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#f85c3a",
      },
    }),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required!"),
    phone: Yup.string().required("This field is required!"),
    requestType: Yup.string().required("This field is required!"),
    message: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    
      try {
      console.log("Submitting form with values:", values); // Added logging
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json(); // Await response.json() to log it

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
          setThanksPopupDisplay(true);
        }, 400);
      } else {
        console.error("Error submitting form:", response.statusText); // Added logging
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Added logging
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="request-form fadeInUp" id="contact-us">
        <div className="_container">
          <h2>NEED ASSISTANCE?</h2>
          <h3>
            Please fill out the form below and we will contact you shortly!
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, touched, errors, status }) => (
              <Form>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Your name*"
                    className={touched.name && errors.name ? "invalid" : ""}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <PhoneInput
                    country={countryCode}
                    value=""
                    onChange={(value) => setFieldValue("phone", value)}
                    placeholder="Phone*"
                    className={touched.phone && errors.phone ? "invalid" : ""}
                  />
                  <ErrorMessage name="phone" component="span" />
                </div>

                <div>
                  <Select
                    name="requestType"
                    options={requestTypes}
                    styles={customStyles}
                    className={`form-field ${
                      touched.requestType && errors.requestType ? "invalid" : ""
                    }`}
                    onChange={(option) =>
                      setFieldValue("requestType", option.value)
                    }
                    placeholder="Type of request*"
                  />
                  <ErrorMessage
                    name="requestType"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="full">
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Your message"
                    className={
                      touched.message && errors.message ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className="orange-button"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default RequestForm;
