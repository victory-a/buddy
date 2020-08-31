import React from "react";
import { useField } from "formik";
import { Input, Container, Label, Span, ErrorSpan } from "./styles";

const TextInput = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container className={`${meta.touched && meta.error ? "error" : ""}`}>
      <Label>{label}</Label>
      <Span>
        <Input type={type} {...field} {...props} />
      </Span>

      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </Container>
  );
};

export default TextInput;
