import React, { Fragment, useLayoutEffect } from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { forgotPasswordSchema } from "utils/validationSchema";
import { forgotPassword } from "lib/auth-client";

import TextInput from "components/TextInput";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import useCustomToast from "hooks/useCustomToast";
import { ShowError } from "components/ShowError/ShowError";

import {
  Title,
  TitleContainer,
  Description,
  FormWrapper,
  FormFooter
} from "layout/AuthLayout/styles";

const initialValues = {
  email: ""
};

const ForgotPassword = () => {
  const { doToast } = useCustomToast();
  useLayoutEffect(() => {
    document.title = "Buddy | Forgot Password";
  }, []);

  const [mutate, { status, error }] = useMutation(forgotPassword);

  async function handleSubmit(values) {
    await mutate(values, {
      onSuccess: async () => {
        doToast("Reset password token sent!", "Check your mail for password reset link");
      }
    });
  }

  return (
    <Fragment>
      <TitleContainer>
        <Title>Forgot Password?</Title>
        <Description>Please enter your registered email for recovery link</Description>
      </TitleContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <TextInput
              name="email"
              type="email"
              placeholder="ekeziedavid@gmail.com"
              label="Email Address"
            />

            <ShowError status={status} error={error} />

            <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
              {status === "loading" || isSubmitting ? <Spinner /> : "Continue"}
            </Button>
          </FormWrapper>
        )}
      </Formik>
      <FormFooter>
        <p>
          Have an account? <Link to="/">Sign In.</Link>
        </p>
      </FormFooter>
    </Fragment>
  );
};

export default ForgotPassword;
