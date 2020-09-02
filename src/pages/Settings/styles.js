import styled from "styled-components";
import colors from "styles/colors";

const FormContainer = styled.section`
  margin: 1.5rem auto;
  max-width: 60rem;
  margin-top: 4rem;
  border: 1px solid ${colors?.lightGrey};
  /* padding: 1.5rem 3rem; */
`;

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 3rem 0;
`;
const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  margin: 1.5rem 0;
`;
export { FormContainer, FormTitle, FormWrapper };
