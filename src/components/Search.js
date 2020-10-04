import React from "react";
import styled from "styled-components";

import { Icon, InputGroup, Input, InputLeftElement } from "@chakra-ui/core";

const Search = props => {
  const { placeholder, onChange, value } = props;

  return (
    <SearchInput>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          type="text"
          value={value}
          name="search"
          onChange={onChange}
          placeholder={placeholder}
          py="1rem"
        />
      </InputGroup>
    </SearchInput>
  );
};

const SearchInput = styled.div`
  margin: 0 2rem 1.5rem;

  & input {
    font-size: 1.4rem;
  }
`;

export default Search;
