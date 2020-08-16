import React, { Fragment, useLayoutEffect } from "react";
import { Formik } from "formik";
// import { Link } from "react-router-dom";
import PasswordInput from "components/TextInput/PasswordInput";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import { resetPasswordSchema } from "utils/validationSchema";
import { Title, TitleContainer, Description, FormWrapper } from "layout/AuthLayout/styles";

const initialValues = {
  newPassword: "",
  confirmPassword: ""
};

const ResetPassword = () => {
  useLayoutEffect(() => {
    document.title = "Buddy | Reset Password";
  }, []);

  function handleSubmit() {}

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
        {({ isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <PasswordInput name="newPassword" title="Password" />
            <PasswordInput name="confirmPassword" title="Confirm Password" />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? <Spinner /> : " Reset Password"}
            </Button>
          </FormWrapper>
        )}
      </Formik>
    </Fragment>
  );
};

export default ResetPassword;
