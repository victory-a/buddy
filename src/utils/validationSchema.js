import * as Yup from "yup";

const validateLastName = () => Yup.string().required("last name is required");
const validateFirstName = () => Yup.string().required("first name is required");
const validateEmail = () =>
  Yup.string()
    .email("enter a valid email")
    .required("email is required");
const validatePassword = () =>
  Yup.string()
    .min(3, "should be atleast 3 characters")
    .required("password is required");
const confirmPassword = () =>
  Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password must match")
    .required("Confirm password is required");

export const signInSchema = () =>
  Yup.object().shape({
    email: validateEmail(),
    password: validatePassword()
  });

export const createAccountSchema = () =>
  Yup.object().shape({
    firstName: validateFirstName(),
    lastName: validateLastName(),
    email: validateEmail(),
    password: validatePassword()
  });

export const forgotPasswordSchema = () =>
  Yup.object().shape({
    email: validateEmail()
  });

export const resetPasswordSchema = () =>
  Yup.object().shape({
    newPassword: validatePassword(),
    confirmPassword: confirmPassword()
  });
