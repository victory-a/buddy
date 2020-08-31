import React from "react";
import { useField } from "formik";
import { Container, Label, Span, ErrorSpan, CustomTextArea } from "./styles";

const TextArea = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container className={`${meta.touched && meta.error ? "error" : ""}`}>
      <Label>{label}</Label>
      <Span>
        <CustomTextArea
          as="textarea"
          placeholder="Here is a sample placeholder"
          // size="100%"
          // maxLength={160}
          {...field}
          {...props}
        />
      </Span>

      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </Container>
  );
};

export default TextArea;
