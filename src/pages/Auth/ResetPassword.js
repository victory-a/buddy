import React, { Fragment, useLayoutEffect } from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import { resetPasswordSchema } from "utils/validationSchema";
import { resetPassword } from "lib/auth-client";

import PasswordInput from "components/TextInput/PasswordInput";
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
  newPassword: "",
  confirmPassword: ""
};

const ResetPassword = () => {
  const { push } = useHistory();
  const { doToast } = useCustomToast();
  let { resetToken } = useParams();

  useLayoutEffect(() => {
    document.title = "Buddy | Reset Password";
  }, []);

  const [mutate, { status, error }] = useMutation(resetPassword);

  async function handleSubmit(values) {
    await mutate([values, resetToken], {
      onSuccess: async () => {
        doToast("Password reset successful!", "login to connect with your buddies");
        push("/login");
      }
    });
  }

  return (
    <Fragment>
      <TitleContainer>
        <Title>Reset your Password</Title>
        <Description>Create a new password</Description>
      </TitleContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <PasswordInput name="newPassword" label="Password" />
            <PasswordInput name="confirmPassword" label="Confirm Password" />

            <ShowError status={status} error={error} />

            <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
              {status === "loading" || isSubmitting ? <Spinner /> : " Reset Password"}
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

export default ResetPassword;
