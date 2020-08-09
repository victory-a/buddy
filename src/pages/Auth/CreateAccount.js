import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Title, Description, FormWrapper, FormFooter } from "layout/AuthLayout/styles";

const CreateAccount = () => {
  return (
    <Fragment>
      <Title>Create an Account</Title>
      <Description>Set up your account and connect with your sure G's</Description>

      <FormWrapper></FormWrapper>

      <FormFooter>
        <p>
          Have an account?<Link to="/">Sign In.</Link>
        </p>
      </FormFooter>
    </Fragment>
  );
};

export default CreateAccount;
