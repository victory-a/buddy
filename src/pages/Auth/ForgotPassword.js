import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Title, Description, FormWrapper } from "layout/AuthLayout/styles";

const ForgotPassword = () => {
  return (
    <Fragment>
      <Title>Forgot your Password?</Title>
      <Description>Please enter your registered email for recovery link</Description>

      <FormWrapper></FormWrapper>
    </Fragment>
  );
};

export default ForgotPassword;
