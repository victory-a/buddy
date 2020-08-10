import React, { Fragment, useLayoutEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import TextInput from "components/TextInput";
import Button from "components/Button";
import { Spinner } from "components/loaders.js";
import PasswordInput from "components/TextInput/PasswordInput";
import { createAccountSchema } from "utils/validationSchema";

import {
  TitleContainer,
  Title,
  Description,
  FormWrapper,
  InlineFields,
  FormFooter
} from "layout/AuthLayout/styles";

const initialValues = {
  email: "",
  password: ""
};

const CreateAccount = () => {
  useLayoutEffect(() => {
    document.title = "Buddy | Create Account";
  }, []);

  function handleSubmit() {}

  return (
    <Fragment>
      <TitleContainer>
        <Title>Create an Account</Title>
        <Description>Set up your account and connect with your sure G's</Description>
      </TitleContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={createAccountSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <InlineFields>
              <TextInput name="firstName" placeholder="david" title="First name" />
              <TextInput name="lastName" placeholder="ekezie" title="Last name" />
            </InlineFields>
            <TextInput
              name="email"
              type="email"
              placeholder="ekeziedavid@gmail.com"
              title="Email Address"
            />

            <PasswordInput name="password" title="Password" />

            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? <Spinner /> : "Create Account"}
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

export default CreateAccount;
