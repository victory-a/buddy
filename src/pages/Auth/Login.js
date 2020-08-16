import React, { Fragment, useLayoutEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import TextInput from "components/TextInput";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import PasswordInput from "components/TextInput/PasswordInput";
import { signInSchema } from "utils/validationSchema";
import { login } from "lib/auth-client";

import {
  TitleContainer,
  Title,
  Description,
  FormWrapper,
  FormFooter
} from "layout/AuthLayout/styles";

const initialValues = {
  email: "",
  password: ""
};

const Login = () => {
  useLayoutEffect(() => {
    document.title = "Buddy | Login";
  }, []);

  async function handleSubmit(values) {
    try {
      const data = await login(values);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <Fragment>
      <TitleContainer>
        <Title>Welcome Back</Title>
        <Description>Sign into your buddy account</Description>
      </TitleContainer>

      <Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={handleSubmit}>
        {({ handleSubmit, isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <TextInput
              name="email"
              type="email"
              placeholder="ekeziedavid@gmail.com"
              title="Email Address"
            />

            <PasswordInput name="password" title="Password" />

            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? <Spinner /> : "Login"}
            </Button>
          </FormWrapper>
        )}
      </Formik>

      <FormFooter>
        <p>
          <Link to="forgot-password">Forgot password?</Link>
        </p>

        <p>
          Don’t have an account? <Link to="create-account">Create account</Link>
        </p>
      </FormFooter>
    </Fragment>
  );
};

export default Login;
