import React from "react";
import { Formik, Form } from "formik";
import { queryCache, useMutation } from "react-query";

import { updatePassword } from "lib/auth-client";
import useCustomToast from "hooks/useCustomToast";

import { usePageDetails } from "layout/AppLayout";
import { updatePasswordSchema } from "utils/validationSchema";
import PasswordInput from "components/TextInput/PasswordInput";
import { ShowError } from "components/ShowError/ShowError";
import { Spinner } from "components/loaders.js";
import Button from "components/Button";

import { FormContainer, FormWrapper, FormTitle } from "./styles";

const Settings = () => {
  const { setPageTitle } = usePageDetails();
  const { doToast } = useCustomToast();
  const [mutate, { status, error }] = useMutation(updatePassword);
  // const focusRef = React.useRef();

  React.useLayoutEffect(() => {
    setPageTitle("Settings");
    document.title = "Buddy | Update Password";
  }, [setPageTitle]);

  async function handleSubmit(values, { resetForm }) {
    await mutate(values, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("user");
        doToast("Success", "Password updated!");
        resetForm();
      }
    });
  }

  return (
    <FormContainer>
      <FormTitle>Update Password</FormTitle>
      <FormWrapper>
        <Formik
          initialValues={{ currentPassword: "", newPassword: "", confirmPassword: "" }}
          validationSchema={updatePasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <PasswordInput name="currentPassword" label="Current Password" />
              <PasswordInput name="newPassword" label="New Password" />
              <PasswordInput name="confirmPassword" label="Confirm Password" />

              <ShowError status={status} error={error} />

              <Button type="submit" disabled={status === "loading" || isSubmitting || !isValid}>
                {status === "loading" || isSubmitting ? <Spinner /> : "Save"}
              </Button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
};

export default Settings;
