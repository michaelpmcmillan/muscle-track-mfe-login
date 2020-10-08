import React from "react";
import GoTrue from "gotrue-js";
import Form from "react-bootstrap/Form";
import Helmet from "react-helmet";
import { Formik } from "formik";
import { FORM, BUTTON, FORM_GROUP } from "./styles";

const auth = new GoTrue({
  APIUrl: "https://muscle-track.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

const login = async (email, password) => {
  await auth
    .login(email, password, true)
    .then((response) => (window.location.href = "/profile"))
    .catch((error) => {
      // display error message
    });
};

export default function Root(props) {
  return (
    <Formik
      initialValues={{ email: "mike@mikemcmillan.dev", password: "password" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        await login(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FORM onSubmit={handleSubmit}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
              integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
              crossOrigin="anonymous"
            ></link>
          </Helmet>

          <FORM_GROUP>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "error" : null}
            />

            {touched.email && errors.email ? (
              <div className="error-message">{errors.email}</div>
            ) : null}
          </FORM_GROUP>

          <FORM_GROUP>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={touched.password && errors.password ? "error" : null}
            />
            {touched.password && errors.password ? (
              <div className="error-message">{errors.password}</div>
            ) : null}
          </FORM_GROUP>

          <FORM_GROUP>
            <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Login"}
            </BUTTON>
          </FORM_GROUP>
        </FORM>
      )}
    </Formik>
  );
}
