import React, { Fragment, useLayoutEffect } from "react";
import { queryCache, useMutation } from "react-query";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { login } from "lib/user-client";
import { signInSchema } from "utils/validationSchema";

import TextInput from "components/TextInput";
import { ShowError } from "components/ShowError/ShowError";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import PasswordInput from "components/TextInput/PasswordInput";
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

  const [mutate, { status, error }] = useMutation(login);

  async function handleSubmit(values) {
    await mutate(values, {
      onSuccess: async () => await queryCache.invalidateQueries("user")
    });
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
              label="Email Address"
            />

            <PasswordInput name="password" label="Password" />

            <ShowError
              status={status}
              error={error === "Invalid credentials" ? "email or password incorrect" : error}
            />

            <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
              {status === "loading" || isSubmitting ? <Spinner /> : "Login"}
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
