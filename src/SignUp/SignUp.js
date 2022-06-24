import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./SignUp.css";

function SignUp() {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const SignUpSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),

    lastname: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),

    email: Yup.string().email("invalid email address").required("Required"),
  });

  return (
    <div className="input-container">
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          alert(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstname" placeholder="First Name" />
            {errors.firstname && touched.firstname ? (
              <p>{errors.firstname}</p>
            ) : null}

            <Field name="lastname" placeholder="Last Name" />
            {errors.lastname && touched.lastname ? (
              <p>{errors.lastname}</p>
            ) : null}

            <Field name="email" placeholder="E-mail" validate={validateEmail} />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
