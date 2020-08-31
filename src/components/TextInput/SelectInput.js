import React from "react";
import { useField } from "formik";
import { Select } from "@chakra-ui/core";
import { SelectContainer, Label, ErrorSpan } from "./styles";

const SelectInput = ({ label, placeholder, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <SelectContainer>
      <Label>{label}</Label>

      <Select
        h="auto"
        p="1.3rem"
        iconSize="23px"
        fontSize="13px"
        letterSpacing="0.1px"
        fontFamily="body"
        color="#495057"
        placeholder={placeholder}
        borderColor={meta.touched && meta.error ? "buddy.error" : "buddy.lightGrey"}
        _hover={{
          outline: "none",
          cursor: "pointer",
          borderColor: `${meta.touched && meta.error ? "buddy.error" : "buddy.primary"}`
        }}
        _focus={{
          outline: "none",
          cursor: "pointer",
          borderColor: `${meta.touched && meta.error ? "buddy.error" : "buddy.primary"}`
        }}
        {...field}
        {...props}
      >
        {options.map(({ value, label }, key) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </Select>

      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </SelectContainer>
  );
};

export default SelectInput;
