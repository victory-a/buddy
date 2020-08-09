import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Title, Description, FormWrapper, FormFooter } from "layout/AuthLayout/styles";

const Login = () => {
  return (
    <Fragment>
      <Title>Welcome Back</Title>
      <Description>Sign into your buddy account</Description>

      <FormWrapper></FormWrapper>

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
