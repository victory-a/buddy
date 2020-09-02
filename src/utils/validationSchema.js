import * as Yup from "yup";

const validateLastName = () =>
  Yup.string()
    .trim()
    .required("last name is required");
const validateFirstName = () =>
  Yup.string()
    .trim()
    .required("first name is required");
const validateEmail = () =>
  Yup.string()
    .trim()
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
const validateGender = () => Yup.string().required("Please select a gender");

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

export const updatePasswordSchema = () =>
  Yup.object().shape({
    currentPassword: validatePassword(),
    newPassword: validatePassword(),
    confirmPassword: confirmPassword()
  });

export const editProfileSchema = () =>
  Yup.object().shape({
    firstName: validateFirstName(),
    lastName: validateLastName(),
    email: validateEmail(),
    gender: validateGender(),
    bio: Yup.string()
      .trim()
      .max(160, "bio cannot exceed 160 characters")
  });

export const createPostSchema = () =>
  Yup.object().shape({
    text: Yup.string()
      .required()
      .label("Post")
      .max(160, "cannot exceed 300 characters")
  });
